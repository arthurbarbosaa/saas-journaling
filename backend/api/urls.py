from django.urls import path
from . import views

urlpatterns = [
    path("journals/", views.JournalListCreate.as_view(), name="journal-list"),
    path("journals/delete/<int:pk>/", views.JournalDelete.as_view(), name="delete-journal"),
]
