from django.urls import path
from .views import DocumentListView, DocumentDetailView, UpdateListView, UpdateDetailView

urlpatterns = [
    path('document', DocumentListView.as_view()),
    path('document/<int:pk/', DocumentDetailView.as_view),
    # path('document_number', Document_numberListView.as_view()),
    # path('document_number/<int:pk>', Document_numberDetailView.as_view),
    path('updated', UpdateListView.as_view()),
    path('updated/<int:pk>', UpdateDetailView.as_view)
    ]
