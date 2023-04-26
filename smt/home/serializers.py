from rest_framework import serializers
from .models import Result

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ('date', 'physics', 'marks_p', 'chemistry', 'marks_c', 'biology', 'marks_b')
