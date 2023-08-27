from rest_framework.viewsets import ModelViewSet, ViewSet
from .models import Course
from .serializers import CourseSerializer
from rest_framework.response import Response


# Create your views here.
class CourseViewSet(ViewSet):

    def list(self, request, pk=None):
        queryset = Course.objects.all()
        serializer = CourseSerializer(queryset, many=True)
        return Response(serializer.data)
