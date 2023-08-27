from django.db import models



class Course(models.Model):
    title = models.TextField(null=False)
    description = models.TextField(null=False)
    course_icon = models.ImageField(upload_to="images/")


    def __str__(self) -> str:
        return self.title
# Create your models here.
