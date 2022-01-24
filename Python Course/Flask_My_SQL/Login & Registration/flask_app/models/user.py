from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# from flask_bcrypt import Bcrypt        
# bcrypt = Bcrypt(app)     # we are creating an object called bcrypt, 
                         # which is made by invoking the function Bcrypt with our app as an argument

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.age = data['age']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_user(data):
        is_valid = True
        if len(data["fname"]) < 3:
            flash("First name must be at least 3 charecters long!")
            is_valid = False
        if len(data["lname"]) < 3:
            flash("Last name must be at least 3 charecters long!")
            is_valid = False
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!")
            is_valid = False
        if data["age"] == "":
            flash("Please enter a valid age")
            is_valid = False
        elif int(data["age"]) < 10:
            flash("Must be atleast 16 to join")
            is_valid = False
        if len(data["password"]) < 5:
            flash("password must be at least 5 charecters long!")
            is_valid = False
        if (data["password"]) != (data["cpassword"]):
            flash("passwords do not match!")
            is_valid = False
        return is_valid 

    @classmethod
    def add_user(cls, data):
        query = 'INSERT INTO user ( first_name, last_name, age, email, password, created_at) VALUES (%(fname)s, %(lname)s, %(age)s, %(email)s, %(password)s, NOW())'
        
        return connectToMySQL('mydb').query_db( query, data )

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM user WHERE email = %(email)s;"
        result = connectToMySQL("mydb").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM user WHERE id = %(user_id)s;"
        result = connectToMySQL("mydb").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])