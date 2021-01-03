from django.shortcuts import render
from django.http import HttpResponse

import pandas as pd
import numpy as np

from calculate import Unfix
from calculate import drawdown
from calculate import List

def Factor():
    text = ""
    for i in range(10):
        text = text +" "+ str(i)
    return text

# Create your views here.
def index(request):
    mass = [2, 23, 34, 50, 120]
    two = "my text"
    data = {"header":List(-1), "message":drawdown()}
    return render(request, "main.html", context={"mas": mass})
    #return render(request, "main.html")


def temp(request):
    
    # Init path csv file 
    csv_file = '~/Documents/quotes/gazp111.txt'
    # Read and parsing csv file
    quotes = pd.read_csv(csv_file, encoding='utf-8',
                         sep=',',names=['DATE','TIME','OPEN','HIGH','LOW','CLOSE','VOL'])
    arr_rec = quotes.to_records()
    arr_limit = arr_rec.DATE[:10]
    arr_output = []
    for res in arr_limit:
        arr_output.append(res)
    # Берем цены закрытия и передаем их по 1000 элементов

    return render(request, "temp.html", context={"mas": arr_output})

def chart(request):

    return render(request, "chart.html")
