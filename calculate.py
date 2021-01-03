def drawdown():
    try:
        a = 12
        b = 22
        return a+b
    except ValueError as e:
        return e
   
def Unfix(*params):
    text=""
    for i in params:
        text+=" "+str(i)
    return text

def List(index):
    data = [22, 33, 55, 1]
    return max(data)