from django.db import IntegrityError
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import HttpResponseBadRequest, JsonResponse
from .models import*
from django.contrib import messages
from django.core import serializers
from django.http import JsonResponse
def chart(request):
    return render(request, 'chart.html')

def marks(request,subject=None):
        marks = Result.objects.all()
        if subject=='physics':
            marks = Result.objects.order_by('date').values('date','physics', 'marks_p')
            data = list(marks)
            return JsonResponse({'marks': data}, safe=False)
        elif subject=='chemistry':
            marks = Result.objects.order_by('date').values('date','chemistry', 'marks_c')
            data = list(marks)
            return JsonResponse({'marks': data}, safe=False)

        elif subject=='biology':
            marks = Result.objects.order_by('date').values('date','biology', 'marks_b')
            data = list(marks)
            return JsonResponse({'marks': data}, safe=False)
        else:
            marks = Result.objects.order_by('date').values('date','total')
            data = list(marks)
            return JsonResponse({'marks': data}, safe=False)







def home(request):
    return render(request, 'home.html')


def update_marks(request):
    if request.method == 'POST':
        physics = request.POST.get('Physics')
        chemistry = request.POST.get('Chemistry')
        bio = request.POST.get('Biology')
        marks_p = request.POST.get('p')
        marks_c = request.POST.get('c')
        marks_b = request.POST.get('b')
        date = request.POST.get('date')
        total = int(marks_b) + int(marks_c) + int(marks_p)
        print(physics)
        
        if physics is None:
            messages.warning(request,'Physics value is required')
        
        try:
            mark = Result.objects.create(
                date=date,
                physics=physics,
                marks_p=marks_p,
                chemistry=chemistry,
                marks_c=marks_c,
                biology=bio,
                marks_b=marks_b,
                total=total
            )
            mark.save() 
            messages.success(request,'Marks updated!👍')
        except IntegrityError:
            messages.error(request,'Invalid input')
        

        return redirect('home')
