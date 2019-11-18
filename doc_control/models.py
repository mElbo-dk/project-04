from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Document(models.Model):

    drawing = models.ImageField(upload_to='assets/', null=True)
    description = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name='created_by', on_delete=models.CASCADE, default=None) 

    def __str__(self):
        return f'{self.description} - {self.created_by}'


class Update(models.Model):

    updated_by = models.ForeignKey(User, related_name='updated_by', on_delete=models.CASCADE, default=None) 
    update_description = models.CharField(max_length=50, null=True)
    updated_at = models.DateTimeField(auto_now=True)
    document = models.ForeignKey(Document, on_delete=models.CASCADE, related_name='updates', null=True)


    def __str__(self):
        return f'{self.update_description} -{self.updated_by}'
