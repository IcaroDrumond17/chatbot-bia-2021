from django.db import models

class Scraping(models.Model):
    code = models.CharField(max_length=15)
    question = models.CharField(max_length=500)
    question_nlp = models.CharField(max_length=500)
    answer = models.CharField(max_length=1000)
    answer_bytes = models.CharField(max_length=100)
    time_proc_npl_final = models.CharField(max_length=100)
    time_proc_ws_final = models.CharField(max_length=100)
    time_req_final = models.CharField(max_length=100)
    time_bs4_final = models.CharField(max_length=100)

    def __str__(self):
        return self.question