from django.db import models

# Create your models here.
from django.db import models

class Result(models.Model):
    date = models.DateField(primary_key=True)
    physics = models.CharField(max_length=255)
    marks_p = models.PositiveIntegerField(default=40)
    chemistry = models.CharField(max_length=255)
    marks_c = models.PositiveIntegerField(default=40)
    biology = models.CharField(max_length=255)
    marks_b = models.PositiveIntegerField(default=250)
    total=models.PositiveIntegerField()
    def __str__(self):
        return f"{self.total} ({self.date})"
