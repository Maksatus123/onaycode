
from django.urls import path
from .views import RegistrationViewSet



urlpatterns = [
    path('create', RegistrationViewSet.as_view()),
]