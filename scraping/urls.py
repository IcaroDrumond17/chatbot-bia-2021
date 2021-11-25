from django.urls import path
from .views import showAll, deleteAll, remove

urlpatterns = [ 
    path('', showAll),
    path('delete/', deleteAll),
    path('remove/<str:code>/', remove),
]
