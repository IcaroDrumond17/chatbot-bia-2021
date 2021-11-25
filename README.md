# ambiente virutal
pip install virtualenv

# Cria um ambiente virtual
virtualenv.exe local_host\chatbot

# Para ativar o ambiente
local_host\chatbot\Scripts\activate

# instalação do django
pip install Django==2.2.5
python -m django --version

# criação do projeto
django-admin startproject bia

# Rodar a aplicação
python manage.py runserver

# criação do aplicativo (cria pastas para estruturas)
python manage.py startapp home

# criação da classe de tabela
python manage.py makemigrations

# criação das tabelas no banco
python manage.py migrate

# Bibliotecas Utilziadas (Web Scraping & NLP)
pip install unidecode
- berautilsoup
pip install bs4
- spacy
pip install spacy --upgrade
python -m spacy download pt
python -m spacy download pt_core_news_lg
- nltk
pip install nltk --upgrade