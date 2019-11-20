# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT
from .models import Document, Update
from .serializers import DocumentSerializer, UpdateSerializer, DocumentListSerializer, UpdateListSerializer

# Create your views here.

class DocumentListView(ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        documents = Document.objects.all()
        serializer_get = DocumentListSerializer(documents, many=True) 
        return Response(serializer_get.data)

    def post(self, request):
        request.data['created_by'] = request.user.id
        document = DocumentSerializer(data=request.data)
        # print(request.data)
        if document.is_valid():
            document.save()
            # print(document.data)
            return Response(document.data, status=HTTP_201_CREATED)
        return Response(document.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class DocumentDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    queryset = Document.objects.all()
    serializer_class = DocumentListSerializer

class UpdateListView(ListCreateAPIView):
    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        update = Update.objects.all()
        serializer_get = UpdateListSerializer(update, many=True)
        return Response(serializer_get.data)


    def post(self, request, pk):
        request.data['updated_by'] = request.user.id
        request.data['document'] = pk
        update = UpdateSerializer(data=request.data)
        print(request.data)
        if update.is_valid():
            update.save()
            return Response(update.data, status=HTTP_201_CREATED) 
        return Response(update.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class UpdateDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    # queryset = Document.objects.all()
    queryset = Update.objects.all()
    serializer_class = UpdateListSerializer
