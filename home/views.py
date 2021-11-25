from django.shortcuts import render
from scraping.views import filter

def home(request):
    return render(request, 'home.html', filter())

def chatbot(request):
    return render(request, 'chatbot.html')
