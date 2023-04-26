from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/update-marks/', views.update_marks, name='update_marks'),
    path('api/chart/', views.chart, name='chart'),
    path('api/marks/<str:subject>/',views.marks,name='marks'),
    path('api/marks/', views.marks, name='marks')
    
]
