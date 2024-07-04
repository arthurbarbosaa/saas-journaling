from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import DailyHabitSerializer, HabitSerializer, UserSerializer, JournalSerializer, MonthSerializer, GoalSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import DailyHabit, Habit, Journal, Month, Goal

class JournalListCreate(generics.ListCreateAPIView):
    serializer_class = JournalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        month_id = self.request.query_params.get('month')
        if month_id:
            return Journal.objects.filter(author=user, month__id=month_id)
        return Journal.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class JournalDelete(generics.DestroyAPIView):
    serializer_class = JournalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Journal.objects.filter(author=user)
    

class MonthListCreate(generics.ListCreateAPIView):
    serializer_class = MonthSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Month.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class MonthDetail(generics.RetrieveAPIView):
    queryset = Month.objects.all()
    serializer_class = MonthSerializer
    permission_classes = [IsAuthenticated]

class MonthDelete(generics.DestroyAPIView):
    serializer_class = MonthSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Month.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class GoalListCreate(generics.ListCreateAPIView):
    serializer_class = GoalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        month_id = self.request.query_params.get('month')
        if month_id:
            return Goal.objects.filter(author=user, month__id=month_id)
        return Goal.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class GoalDelete(generics.DestroyAPIView):
    serializer_class = GoalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Goal.objects.filter(author=user)
    
class GoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class HabitListCreate(generics.ListCreateAPIView):
    serializer_class = HabitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        month_id = self.request.query_params.get('month')
        if month_id:
            return Habit.objects.filter(author=user, month__id=month_id)
        return Habit.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class HabitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer
    permission_classes = [IsAuthenticated]

class HabitDelete(generics.DestroyAPIView):
    serializer_class = HabitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Habit.objects.filter(author=user)

class DailyHabitListCreate(generics.ListCreateAPIView):
    serializer_class = DailyHabitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        habit_id = self.request.query_params.get('habit')
        if habit_id:
            return DailyHabit.objects.filter(habit__author=user, habit__id=habit_id)
        return DailyHabit.objects.filter(habit__author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class DailyHabitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyHabit.objects.all()
    serializer_class = DailyHabitSerializer
    permission_classes = [IsAuthenticated]

class DailyHabitDelete(generics.DestroyAPIView):
    serializer_class = DailyHabitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return DailyHabit.objects.filter(habit__author=user)