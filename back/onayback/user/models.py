from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from courses.models import Course


# Create your models here.

class Registration(models.Model):
    name = models.CharField(max_length=255,  null=False, default="")
    phone = PhoneNumberField(blank = True)
    course = models.ForeignKey(Course, null=True, on_delete=models.SET_NULL)

    def __str__(self) -> str:
        return f'{self.name}: {self.phone}'