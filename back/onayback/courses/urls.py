
from django.urls import path
from .views import CourseViewSet



urlpatterns = [
    path('list', CourseViewSet.as_view({'get': 'list'})),
]