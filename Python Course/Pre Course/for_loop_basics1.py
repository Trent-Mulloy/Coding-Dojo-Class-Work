for number in range (0,151):
    print (number)

for number in range (0,100,5):
    print (number)

for number in range (0,101):
    if (number % 10 == 0):
        print ("dojo")
    elif (number % 5 == 0):
        print ("coding")
    else:
        print (number)

x = sum (range (0,500000))
print (x)

for number in range (2018,0,-4):
    print (number)

lownum = 2
highnum = 20
mult = 5

for number in range (lownum, highnum):
    if (number % mult == 0):
        print number\