from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    profile_image = models.CharField(max_length=500, blank=True)
    
