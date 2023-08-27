from rest_framework.generics import CreateAPIView

from .models import Registration
from .serializers import RegistrationSerializer
from rest_framework.response import Response


# Create your views here.
class RegistrationViewSet(CreateAPIView):
    serializer_class = RegistrationSerializer
    queryset = Registration.objects.all()

#Format
#name: String
#phone: +7 ... ... .. ..
#course: courseID
        
