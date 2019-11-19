from django.urls import path
from .views import DocumentListView, DocumentDetailView, UpdateListView, UpdateDetailView

urlpatterns = [
    path('documents', DocumentListView.as_view()),
    path('documents/<int:pk>/', DocumentDetailView.as_view()),
    path('documents/<int:pk>/update', UpdateListView.as_view()),
    path('documents/<int:pk>/updates', UpdateDetailView.as_view())
    ]
