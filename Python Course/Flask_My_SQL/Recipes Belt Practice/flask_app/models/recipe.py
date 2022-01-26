from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from flask_app.models import user
# from flask_bcrypt import Bcrypt        
# bcrypt = Bcrypt(app)     # we are creating an object called bcrypt, 
                         # which is made by invoking the function Bcrypt with our app as an argument

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.under30 = data['under30']
        self.description = data['description']
        self.instructions = data['instructions']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.user = {}

    @classmethod
    def show_recipes(cls):
        query = "SELECT * FROM Recipes LEFT JOIN Users ON Recipes.user_id = Users.id;"
        
        results = connectToMySQL('mydb').query_db(query)

        recipes = []

        for row in results:
            recipe = cls(row)

            user_data = {
                "id" : row['Users.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "password" : row['password'],
                "created_at" : row['Users.created_at'],
                "updated_at" : row['Users.updated_at']
            }

            recipe.user = user.User(user_data)

            recipes.append( recipe )

        return recipes
    
    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if len(data["name"]) < 3:
            flash("name must be at least 3 charecters long!")
            is_valid = False
        if len(data["description"]) < 3:
            flash("description must be at least 3 charecters long!")
            is_valid = False
        if len(data["instructions"]) < 3:
            flash("instructions must be at least 3 charecters long!")
            is_valid = False
        return is_valid 
    
    
    @classmethod
    def add_recipe(cls, data):
        query = 'INSERT INTO Recipes ( name, under30, description, instructions, created_at, user_id) VALUES (%(name)s, %(under30)s, %(description)s, %(instructions)s, NOW(), %(user_id)s)'
        
        return connectToMySQL('mydb').query_db( query, data )

    @classmethod
    def one_recipe(cls, data):
        query = "SELECT * FROM Recipes WHERE id = %(recipe_id)s;"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return cls(results[0]) 
    
    @classmethod
    def update_recipe(cls, data):
        query = "UPDATE Recipes SET name=%(name)s, under30=%(under30)s, description=%(description)s, instructions=%(instructions)s, updated_at=NOW() WHERE id = %(recipe_id)s;"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return connectToMySQL('mydb').query_db( query, data ) 

    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM Recipes WHERE id = %(recipe_id)s;"
        
        return connectToMySQL('mydb').query_db( query, data )