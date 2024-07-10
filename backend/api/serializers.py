from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Journal, Month, Goal, Habit, DailyHabit


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class MonthSerializer(serializers.ModelSerializer):

    class Meta:
        model = Month
        fields = ["id", "name", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class JournalSerializer(serializers.ModelSerializer):
    month_id = serializers.PrimaryKeyRelatedField(queryset=Month.objects.all(), source='month')

    class Meta:
        model = Journal
        fields = ["id", "created_at", "highlight", "weight", "author", "month", "month_id"]
        extra_kwargs = {"author": {"read_only": True}, "month": {"read_only": True}}


class GoalSerializer(serializers.ModelSerializer):
    month_id = serializers.PrimaryKeyRelatedField(queryset=Month.objects.all(), source='month')
    class Meta:
        model = Goal
        fields = ["id", "name", "is_completed", "author", "month", "month_id"]
        extra_kwargs = {"author": {"read_only": True}, "month": {"read_only": True}}


class HabitSerializer(serializers.ModelSerializer):
    month_id = serializers.PrimaryKeyRelatedField(queryset=Month.objects.all(), source='month')

    class Meta:
        model = Habit
        fields = ["id", "name", "author", "month", "month_id"]
        extra_kwargs = {"author": {"read_only": True}, "month": {"read_only": True}}

class DailyHabitSerializer(serializers.ModelSerializer):
    habit = HabitSerializer(read_only=True)
    habit_id = serializers.PrimaryKeyRelatedField(queryset=Habit.objects.all(), source='habit')
    journal_id = serializers.PrimaryKeyRelatedField(queryset=Journal.objects.all(), source='journal')

    class Meta:
        model = DailyHabit
        fields = ["id", "is_practiced", "habit", "habit_id", "journal", "journal_id"]
        extra_kwargs = {"habit": {"read_only": True}, "journal": {"read_only": True}}