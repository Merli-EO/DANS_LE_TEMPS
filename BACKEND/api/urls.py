from django.urls import path
from rest_framework import routers
from .views import UserViewSet, StoryViewSet, index

userRouter = routers.DefaultRouter()
userRouter.register(r'api/user', UserViewSet)

storyRouter = routers.DefaultRouter()
storyRouter.register(r'api/story', StoryViewSet)

urlpatterns = [path('', index)]

urlpatterns += userRouter.urls + storyRouter.urls

print(urlpatterns)