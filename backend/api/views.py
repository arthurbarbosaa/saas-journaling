from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, JournalSerializer, MonthSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Journal, Month

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
