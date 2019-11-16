from django.urls import path
from .views import DocumentListView, DocumentDetailView, UpdateListView, UpdateDetailView

urlpatterns = [
    path('documents', DocumentListView.as_view()),
    path('documents/<int:pk>/', DocumentDetailView.as_view()),
    path('updates', UpdateListView.as_view()),
    path('updates/<int:pk>/', UpdateDetailView.as_view())
    ]
