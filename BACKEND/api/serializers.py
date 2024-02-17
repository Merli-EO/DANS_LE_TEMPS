from rest_framework import serializers
from api.models import User, Story


# Lead serializer

class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class StorySerializer (serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = '__all__'