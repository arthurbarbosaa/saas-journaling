from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Journal


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ["id", "created_at", "highlight", "is_gym_done", "is_read_done", "weight", "author"]
        extra_kwargs = {"author": {"read_only": True}}