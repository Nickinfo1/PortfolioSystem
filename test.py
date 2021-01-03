
import plotly.graph_objects as go
import pandas as pd
import numpy as np

def test():
    matrix = [[1,5,2],[2,10,3],[3,4,5]]
    users = ["tom","gary","sam","nick"]
    sort = users[:2]
    return matrix[1][1]

def Turt():
    data = (1,2,3)
    return data

def FileWrite():
    filename = "file.txt"
    try:
        fileopen = open(filename, "w")
        try:
            fileopen.write("hello fuckers!!!")
        except Exception as e:
            print(e)
        finally:
            fileopen.close()
    except Exception as ex:
        print(ex)

def FileWith():
    filename = "file2.txt"
    with open(filename, "w") as somefile:
        somefile.write("privet")

#def ExportCSV():
def ModulesPy():
    print(help('modules'))

def DrawGraph():
    df = pd.read_csv('~/Documents/quotes/GAZP_200101_201224.csv')
    fig = go.Figure(data=[go.Candlestick(
        x=df['<TIME>'],
        open=df['<OPEN>'],
        high=df['<HIGH>'],
        low=df['<LOW>'],
        close=df['<CLOSE>'])
    ])
    fig.show()

def TestCsv():
    csv_file = '~/Documents/quotes/gazp111.txt'
    quotes = pd.read_csv(csv_file, sep=',', names=['<DATE>','<TIME>','<OPEN>','<HIGH>','<LOW>','<CLOSE>','<VOL>'])
    datatime = quotes['<DATE>'][:10]
    arr3 = []
    for arr in datatime:
        arr3.append(arr)

    #arr = datatime.to_numpy()
    print(arr3)

#print(Turt())
#FileWrite()
#ModulesPy()
#DrawGraph()
TestCsv()