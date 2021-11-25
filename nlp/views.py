from questions.models import Question
from scraping.views import salve, webscraping
from django.http import JsonResponse
from unidecode import unidecode
import spacy
import nltk
import re
import time

nlp = spacy.load("pt_core_news_lg")

# NPL
def internetLanguage(item):
    item = item.replace('vc', 'voce')
    item = item.replace('vcs', 'voces')
    item = item.replace('eh', 'e')
    item = item.replace('tb', 'tambem')
    item = item.replace('tbm', 'tambem')
    item = item.replace('oq', 'o que')
    item = item.replace('dq', 'de que')
    item = item.replace('td', 'tudo')
    item = item.replace('pq', 'por que')

    return item


#nltk
def stemization(text):

    tokenizador = nltk.WhitespaceTokenizer()
    radical = nltk.RSLPStemmer()

    tokenized_text = tokenizador.tokenize(text)

    items = []

    for p in tokenized_text:
        items.append(radical.stem(p))
    
    return ' '.join(items)


def textFormated(text):
    # question received
    text = unidecode(text)
    text = text.lower()
    text = text.replace('?', '')
    text = text.replace(',', '')
    text = text.strip()

    text = internetLanguage(text)

    # verb tenses
    return stemization(text)

# first letter capital
def first_letter_capital(s):
    return ' '.join(w[:1].upper() + w[1:] for w in s.split(' '))


## classification
# ADJ - adjetivo
# CCONJ - Conjunção
# DET - Determinar
# NOUN - Substantivo
# PRON - Pronome
# ADV - Adverbio
# VERB - Verbo
# ADP - Adposição
# NUM - Numero
# DAT - Data
# PUNC - Pontuação
# PROPN -nome proprio
# get classification
def getClassification(question, pos):

    question = nlp(question)
    w = False
    temp = ''
    ## lematização
    for i in question:
        if i.pos_ == pos:
            if w:
                temp += ' ' + i.text
            else:
                temp = i.text
                w = True

    return temp

## entity recognition
# PER - Pessoa
# LOC - Local
# ORG - Organização
def getEntity(question, ent):
        
    question = nlp(question)
    w = False
    temp = ''
    for i in question.ents:
    ## entity recognition
        if i.label_ == ent:
            if w:
                temp += ' ' + i.text
            else:
                temp = i.text
                w = True
    return temp

def nlpSpacy(question):

    noun = ''
    verb = ''
    adj = ''
    propn = ''
    org = ''
    loc = ''
    per = ''
    adp = ''
 
    ## classification
    # ADJ - adjetivo
    # CCONJ - Conjunção
    # DET - Determinar
    # NOUN - Substantivo
    # PRON - Pronome
    # ADV - Adverbio
    # VERB - Verbo
    # ADP - Adposição
    # NUM - Numero
    # DAT - Data
    # interjeição
    # PUNC - Pontuação
    # PROPN -nome proprio
    adp = getClassification(question, "ADP")   
    noun = getClassification(question, "NOUN")
    verb = getClassification(question, "VERB")
    propn = getClassification(question, "PROPN")
    adj = getClassification(question, "ADJ")
   
    ## entity recognition
    # PER - Pessoa
    # LOC - Local
    # ORG - Organização
    per = getEntity(first_letter_capital(adj), "PER")
    loc = getEntity(first_letter_capital(adj), "LOC")
    org = getEntity(first_letter_capital(adj), "ORG")
    per += getEntity(first_letter_capital(verb), "PER")+' '
    loc += getEntity(first_letter_capital(verb), "LOC")+' '
    org += getEntity(first_letter_capital(verb), "ORG")+' '
    per += getEntity(first_letter_capital(propn), "PER")+' '
    loc += getEntity(first_letter_capital(propn), "LOC")+' '
    org += getEntity(first_letter_capital(propn), "ORG")+' '
    per += getEntity(first_letter_capital(noun), "PER")+' '
    loc += getEntity(first_letter_capital(noun), "LOC")+' '
    org += getEntity(first_letter_capital(noun), "ORG")+' '

    adj = adj.strip()
    per = per.strip()
    verb = verb.strip()
    loc = loc.strip()
    propn = propn.strip()
    noun = noun.strip()
    org = org.strip()
    
    #rules
    result = ''
    if len(adj) > 0:
        result = adj
    if len(verb) > 0:
        if len(adj) > 0:
            result = verb + ' ' + adj
        else:
            result = verb
    if len(propn) > 0:
        if len(adj) > 0:
            result = propn + ' ' + adj
        else:
            result = propn
    if len(org) > 0:
        if len(adj) > 0:
            result = org + ' ' + adj
        else:
            result = org
    if len(loc) > 0:
        if len(adj) > 0:
            result = first_letter_capital(loc) + ' ' + adj
        else:
            if len(re.findall(r'\w+', loc)) > 1:
                    word = loc.split()
                    result = first_letter_capital(word[0]) + ' ' + adp + ' ' + first_letter_capital(word[1])
            else:
                result = first_letter_capital(loc)
    if len(per) > 0:
        if len(adj) > 0:
            result = first_letter_capital(per) + ' ' + adj
        else:
            if len(re.findall(r'\w+', per)) > 1:
                    word = per.split()
                    result = first_letter_capital(word[0]) + ' ' + adp + ' ' + first_letter_capital(word[1])
            else:
                result = first_letter_capital(per)
    if len(noun) > 0:
        if len(adj) > 0:
            if len(adp) > 0:
                if len(re.findall(r'\w+', noun)) > 1:
                    word = noun.split()
                    result = word[0] + ' ' + adp + ' ' + word[1] + ' ' + adj
                else:
                    result = noun + ' ' + adp + ' ' + adj
            else:
                result = noun + ' ' + adj
        else:
            if len(re.findall(r'\w+', noun)) > 1:
                    word = noun.split()
                    result = word[0] + ' ' + adp + ' ' + word[1]
            else:
                result = noun

    return result

#time converter
def calcTime(end, start):
    hours, rem = divmod(end-start, 3600)
    minutes, seconds = divmod(rem, 60)
    return str("{:05.6f}".format(seconds))

def input(request, _question):

    ## start NLP processing
    start = time.time()
    _question = _question.replace('%20', ' ')
    _question = _question.split(':')
    question_before = _question[1]
    question = _question[0]
    question = question.lower()

    # get questions in database
    q = Question.objects.filter()

    result = list()
    data = []

    if len(q) <= 0:
        # web scraping
        data = webscraping(nlpSpacy(question))
        result.append({
            'code_current': 0,
            'question': question,
            'output': 'Resposta: "' + data[1] +'" Fonte: https://pt.wikipedia.org/'
        })
    else:
        # data base
        for a in q:
            result.append({
                'code_current': a.code,
                'question': a.question,
                'output': a.answer
            })

    # question received
    question_received = textFormated(question)
    i = 0
    controller = False
    # compare questions and return answers
    for b in result:
        i += 1
        # question found
        question_found = textFormated(b['question'])

        if question_found == question_received:
            controller = True
            break

    templist = list()

    l = 0
    for c in result:
        l += 1
        if i == l and controller == True:
            templist.append(c)
            break

    if len(templist) <= 0:
        # web scraping
        data = webscraping(nlpSpacy(question))
        templist.append({
            'code_current': 0,
            'question': question,
            'output': 'Resposta: "' + data[1] +'" Fonte: https://pt.wikipedia.org/'
        })

    result = templist

    ## end NLP processing
    end = time.time()
    #Salve data
    if len(data) > 0:
        salve(question_before, question, data[1], calcTime(end, start), calcTime(data[3], data[2]), 
            calcTime(data[5], data[4]), calcTime(data[7], data[6]), data[8])

    return JsonResponse(result, safe=False)
