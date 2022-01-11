x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
# print (x)
# students[0]["last_name"] = "Bryant"
# print students
# sports_directory ["soccer"][0] = "andres"
# print sports_directory
# z[0]["y"] = 30
# print z

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
# def iterateDictionary(students):
for i in range(len(students)):
    print ("First Name = " + students[i]['first_name'], "Last Name = " + students[i]['last_name'])


    #Get Values
print(students[i]['last_name'])


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
length_key = len(dojo['locations'])
print length_key, "LOCATIONS"
i = 0
while i < len(dojo['locations']):
    print dojo ['locations'][i]
    i += 1
length_key = len(dojo['instructors'])
print length_key, "Instructors"
i = 0
while i < len(dojo['instructors']):
    print dojo ['instructors'][i]
    i += 1 



# printInfo(dojo)
# # output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
