from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Document(models.Model):
    
    decription = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.decription


class Update(models.Model): 

    updated_by = models.CharField(max_length=50)
    update_decription = models.CharField(max_length=50, null=True)
    updated_at = models.DateTimeField(auto_now=True)
    document = models.ForeignKey(Document, on_delete=models.CASCADE, related_name='update', null=True)
 

    def __str__(self):
        return self.updated_by
