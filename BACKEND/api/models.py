from django.db import models
# Create your models here.

class User(models.Model):

    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email_adress = models.EmailField(max_length=30)
    password = models.CharField(max_length=20)

class Story(models.Model):

    title = models.CharField(max_length=30)
    publication_date = models.DateTimeField(auto_now_add=True)
    url = models.URLField(max_length=100)
    moral = models.TextField(max_length=500, blank=True)
    description = models.TextField(max_length=500, blank=True)
    thumbnail = models.URLField(max_length=100, default='')

