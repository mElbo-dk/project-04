from rest_framework import serializers
from .models import Document, Update

class NestedUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = ('id', 'updated_by', 'update_decription', 'updated_at', 'document')

class NestedDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id', 'decription', 'created_at')

class UpdateSerializer(serializers.ModelSerializer):

    document = NestedDocumentSerializer()

    class Meta:
        model = Update
        fields = ('id', 'updated_by', 'updated_at', 'update_decription', 'document')

class DocumentSerializer(serializers.ModelSerializer):
    
    updates = NestedUpdateSerializer(required=False) 
    class Meta:
        model = Document
        fields = ('id', 'decription', 'created_at', 'updates')
