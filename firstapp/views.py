from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    one = {2, 23, 34+12}
    two = "my text"
    data = {"header":one, "message":two}
    return render(request, "main.html", context=data)
