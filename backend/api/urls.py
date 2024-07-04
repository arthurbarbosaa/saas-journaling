from django.urls import path
from . import views

urlpatterns = [
    path("journals/", views.JournalListCreate.as_view(), name="journal-list"),
    path("journals/delete/<int:pk>/", views.JournalDelete.as_view(), name="delete-journal"),
    path('months/', views.MonthListCreate.as_view(), name='month-list-create'),
    path('months/<int:pk>/', views.MonthDetail.as_view(), name='month-detail'),
    path('months/delete/<int:pk>/', views.MonthDelete.as_view(), name='month-delete'),
    path("goals/", views.GoalListCreate.as_view(), name="goal-list"),
    path('goals/<int:pk>/', views.GoalDetailView.as_view(), name='goal-detail'),
    path("goals/delete/<int:pk>/", views.GoalDelete.as_view(), name="delete-goal"),
    path('habits/', views.HabitListCreate.as_view(), name='habit-list-create'),
    path('habits/<int:pk>/', views.HabitDetail.as_view(), name='habit-detail'),
    path('habits/delete/<int:pk>/', views.HabitDelete.as_view(), name='delete'),
    path('dailyhabits/', views.DailyHabitListCreate.as_view(), name='dailyhabit-list-create'),
    path('dailyhabits/<int:pk>/', views.DailyHabitDetail.as_view(), name='dailyhabit-detail'),
    path('dailyhabits/<int:pk>/delete/', views.DailyHabitDelete.as_view(), name='dailyhabit-delete'),
]
