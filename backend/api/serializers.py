from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Journal, Month


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
    month = MonthSerializer()
    class Meta:
        model = Journal
        fields = ["id", "created_at", "highlight", "is_gym_done", "is_read_done", "weight", "author", "month"]
        extra_kwargs = {"author": {"read_only": True}, "month": {"read_only": True}}