from api.models import User, Story
from rest_framework import viewsets, permissions, response
from .serializers import UserSerializer, StorySerializer
from django.shortcuts import render
from django.conf import settings
from pathlib import Path
from rest_framework.decorators import action
from rest_framework.renderers import JSONRenderer
from .data_creation import Data_Creation


Data_Creation()
# Create your views here.

def index(request):
    return render(request, "index.html")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
    

class StoryViewSet(viewsets.ModelViewSet):
    queryset = Story.objects.all()
    
    obj_test = Story.objects.first()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StorySerializer(queryset, many=True)

    @action(methods=['get'], detail=False)
    def get_data(self, request):
        json = JSONRenderer().render(self.serializer_class.data)
        return response.Response(json) #response.Response(self.serializer_class.data)