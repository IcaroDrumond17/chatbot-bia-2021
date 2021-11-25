from django.shortcuts import render
from .models import Scraping
import requests
from bs4 import BeautifulSoup
import spacy
import time
from datetime import datetime
import json

nlp = spacy.load("pt_core_news_lg")

# generate code
def getCode():
    dataHora = datetime.now()
    code = str(dataHora.year)
    code += str(dataHora.month)
    code += str(dataHora.day)
    code += str(dataHora.hour)
    code += str(dataHora.minute)
    code += str(dataHora.second)
    code = str(int(round(int(code)/2, 0)))
    return code

# get all Scrapings
def showAll(request):

    s = Scraping.objects.all()

    return render(request, 'scrapings.html', {
        'data': s,
    })

def sum(items):

    s = 0
    for i in items:
        s += float(i)
    
    return s


def filter():

    s = Scraping.objects.all()

    code_label = [ obj.code for obj in s]
    tpnf = [obj.time_proc_npl_final for obj in s]
    tpwf = [obj.time_proc_ws_final for obj in s]
    trf = [obj.time_req_final for obj in s]
    tbf = [obj.time_bs4_final for obj in s]
    abytes = [obj.answer_bytes for obj in s]

    #media
    snm = sum(tpnf) / len(tpnf)
    swm = sum(tpwf) / len(tpwf)
    srm = sum(trf) / len(trf)
    sbm = sum(tbf) / len(tbf)

    context = {
        'code_label': json.dumps(code_label),
        'tpnf': json.dumps(tpnf),
        'tpwf': json.dumps(tpwf),
        'trf': json.dumps(trf),
        'tbf': json.dumps(tbf),
        'abytes': json.dumps(abytes),
        'snm': json.dumps(snm),
        'swm': json.dumps(swm),
        'srm': json.dumps(srm),
        'sbm': json.dumps(sbm),
    }
    
    return context

def salve(question_before, question_nlp, answer, tpnf, tpwf, trf, tbf, answer_bytes):

    code = getCode()
    sp = Scraping(
        code = code, 
        question = question_before + '?',
        question_nlp = question_nlp,
        answer = answer,
        answer_bytes = answer_bytes,
        time_proc_npl_final = tpnf,
        time_proc_ws_final = tpwf,
        time_req_final = trf,
        time_bs4_final = tbf,
    )

    sp.save()

    return code

def remove(request, code):

    Scraping.objects.filter(code=code).delete()

    return render(request, 'redirect_s.html')


def deleteAll(request):

    Scraping.objects.all().delete()

    return render(request, 'redirect_s.html')

# Web Scraping
def webscraping(question):
    ## start WebScraping processing
    start = time.time()
    
    if question:
        question = question.strip()
        question = question.replace(' ', '_')
        # scraping target
        # 'https://pt.wikipedia.org/wiki/
        r_start = time.time()
        response = requests.get('https://pt.wikipedia.org/wiki/'+question)
        r_end = time.time()

        b4_start = time.time()
        site = BeautifulSoup(response.text, 'html.parser')

        # identification of a standard class in the html that contains the fetched data
        temp = site.find('div', attrs={'id': 'noarticletext'})

        if temp:
            for s in temp.stripped_strings:
                # message for when the required data does not exist and or the search did not return anything
                if 'A Wikipédia não possui um artigo com este nome exato'.lower() in s.lower():
                    ## end 1 WebScraping processing
                    b4_end = time.time()
                    end = time.time()
                    return question, "Sem Resultados.", start, end, r_start, r_end, b4_start, b4_end, 0
        # new identification of a standard class in the html that contains the fetched data
        temp = site.find('div', attrs={'class': 'mw-parser-output'})

        if temp:
            # through a regular expression, searching only the data between the <p></p> tags
            import re
            temp = temp.find_all(re.compile("^p"))
         
            text = ''
            # entering data into a list
            for item in temp:
                text = re.sub(r"\[(.*?)\]", "", item.text)
                if len(text) > 50:
                    break

            ## end 2 WebScraping processing
            b4_end = time.time()
            end = time.time()
            return question, text, start, end, r_start, r_end, b4_start, b4_end, len(text.encode('utf-8'))

    ## end 3 WebScraping processing
    b4_end = time.time()
    end = time.time()
    return question, "Sem Resultados.", start, end, r_start, r_end, b4_start, b4_end, 0

