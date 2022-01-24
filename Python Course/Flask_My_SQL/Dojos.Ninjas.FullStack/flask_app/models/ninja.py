from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def all_ninjas(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL('mydb').query_db(query)

        ninjas = []

        for ninja_data in results:
    # User(user_data)
            ninja = cls(ninja_data)
            ninjas.append(ninja)
        
        return ninjas
    
    @staticmethod
    def validate_ninja(data):
        is_valid = True
        if len(data["fname"]) < 3:
            flash("First name must be at least 3 charecters long!")
            is_valid = False
        if len(data["lname"]) < 3:
            flash("Last name must be at least 3 charecters long!")
            is_valid = False
        if data["age"] == "":
            flash("Please enter a valid age")
            is_valid = False
        elif int(data["age"]) < 10:
            flash("Must be atleast 16 to join")
            is_valid = False
        return is_valid
    
    
    
    
    
    
    @classmethod
    def add_ninja(cls, data):
        query = 'INSERT INTO ninjas ( first_name, last_name, age, dojos_id, created_at) VALUES (%(fname)s, %(lname)s, %(age)s, %(dojos_id)s, NOW())'
        
        return connectToMySQL('mydb').query_db( query, data )

    @classmethod
    def delete_ninja(cls, data):
        query = "DELETE FROM ninjas WHERE id = %(ninja_id)s;"
        
        return connectToMySQL('mydb').query_db( query, data )

    @classmethod
    def one_ninja(cls, data):
        query = "SELECT * FROM ninjas WHERE id = %(ninja_id)s;"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return cls(results[0]) 

    @classmethod
    def edit_ninja(cls, data):
        query = "UPDATE ninjas SET first_name=%(fname)s, last_name=%(lname)s, age=%(age)s, dojos_id=%(dojos_id)s, updated_at=NOW() WHERE id = %(ninja_id)s;"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return connectToMySQL('mydb').query_db( query, data ) 