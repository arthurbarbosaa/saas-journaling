from django.db import models
from django.contrib.auth.models import User

class Journal(models.Model):
    created_at = models.DateField(auto_now_add=True)
    highlight = models.CharField(max_length=255)
    is_gym_done = models.BooleanField(default=False)
    is_read_done = models.BooleanField(default=False)
    weight = models.CharField(max_length=5)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="journals")

    def __str__(self):
        return self.highlight