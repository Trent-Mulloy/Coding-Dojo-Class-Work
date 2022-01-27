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
        if len(data["password"]) < 5:
            flash("password must be at least 5 charecters long!")
            is_valid = False
        if (data["password"]) != (data["cpassword"]):
            flash("passwords do not match!")
            is_valid = False 
        return is_valid 

    @classmethod
    def add_user(cls, data):
        query = 'INSERT INTO users ( first_name, last_name, email, password, created_at) VALUES (%(fname)s, %(lname)s, %(email)s, %(password)s, NOW())'
        
        return connectToMySQL('tv_shows').query_db( query, data )

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("tv_shows").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"
        result = connectToMySQL("tv_shows").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])