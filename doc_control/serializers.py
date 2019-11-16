from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Document, Update
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class NestedUpdateSerializer(serializers.ModelSerializer):
    updated_by = UserSerializer()
    class Meta:
        model = Update
        fields = ('id', 'updated_by', 'update_decription', 'updated_at')

class NestedDocumentSerializer(serializers.ModelSerializer):
    created_by = UserSerializer()
    class Meta:
        model = Document
        fields = ('id', 'created_by', 'decription', 'created_at')

class UpdateSerializer(serializers.ModelSerializer):
    updated_by = UserSerializer()
    document = NestedDocumentSerializer()
    class Meta:
        model = Update
        fields = ('id', 'updated_by', 'updated_at', 'update_decription', 'document')

class DocumentSerializer(serializers.ModelSerializer):
    created_by = UserSerializer()
    updates = NestedUpdateSerializer(required=False, many=True)
    class Meta:
        model = Document
        fields = ('id', 'created_by', 'decription', 'created_at', 'updates')
