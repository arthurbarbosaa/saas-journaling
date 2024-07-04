from django.db import models
from django.contrib.auth.models import User

class Month(models.Model):
    name = models.CharField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="months")


    def __str__(self):
        return self.name

class Journal(models.Model):
    created_at = models.DateField(auto_now_add=True)
    highlight = models.CharField(max_length=255)
    is_gym_done = models.BooleanField(default=False)
    is_read_done = models.BooleanField(default=False)
    weight = models.CharField(max_length=5)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="journals")
    month = models.ForeignKey(Month, on_delete=models.CASCADE, related_name="journals")

    def __str__(self):
        return self.highlight


class Goal(models.Model):
    name = models.CharField(max_length=255)
    is_completed = models.BooleanField(default=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="goals")
    month = models.ForeignKey(Month, on_delete=models.CASCADE, related_name="goals")

    def __str__(self):
        return self.name
    
class Habit(models.Model):
    name = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="habits")
    month = models.ForeignKey(Month, on_delete=models.CASCADE, related_name="habits")

    def __str__(self):
        return self.name

class DailyHabit(models.Model):
    is_practiced = models.BooleanField(default=False)
    habit = models.ForeignKey(Habit, on_delete=models.CASCADE, related_name="daily_habits")
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE, related_name="daily_habits")

    def __str__(self):
        return self.habit.name