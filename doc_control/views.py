# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Document, Update
from .serializers import DocumentSerializer, UpdateSerializer

# Create your views here.

class DocumentListView(ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class DocumentDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class UpdateListView(ListCreateAPIView):
    queryset = Update.objects.all()
    serializer_class = UpdateSerializer

class UpdateDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Update.objects.all()
    serializer_class = UpdateSerializer


# class Document_numberListView(ListAPIView):
#     queryset = Document_number.objects.all()
#     serializer_class = Document_numberSerializer


# class Document_numberDetailView(RetrieveAPIView):
#     queryset = Document_number.objects.all()
#     serializer_class = Document_numberSerializer
