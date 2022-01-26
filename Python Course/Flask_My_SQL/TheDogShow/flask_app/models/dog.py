from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

class Dog:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.breed = data['breed']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.user = {}
        self.user1 = []

    @classmethod
    def show_dogs(cls):
        query = "SELECT * FROM dogs LEFT JOIN user ON dogs.user_id = user.id;"
        
        results = connectToMySQL('mydb').query_db(query)

        dogs = []

        for row in results:
            dog = cls(row)

            user_data = {
                "id" : row['user.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "age" : row['user.age'],
                "password" : row['password'],
                "created_at" : row['user.created_at'],
                "updated_at" : row['user.updated_at']
            }

            dog.user = user.User(user_data)

            dogs.append( dog )

        return dogs

    @classmethod
    def one_dog(cls, data):
        query = "SELECT * FROM dogs LEFT JOIN user ON dogs.user_id = user.id WHERE dogs.id = %(dog_id)s;"
        results = connectToMySQL('mydb').query_db(query, data)

        dogs = []

        for row in results:
            dog = cls(row)

            user_data = {
                "id" : row['user.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "age" : row['user.age'],
                "password" : row['password'],
                "created_at" : row['user.created_at'],
                "updated_at" : row['user.updated_at']
            }

            dog.user = user.User(user_data)

            dogs.append( dog )

        return dogs

    @classmethod
    def add_dog(cls, data):
        query = 'INSERT INTO dogs ( name, breed, age, created_at, user_id) VALUES (%(name)s, %(breed)s, %(age)s, NOW(), %(user_id)s)'
        
        return connectToMySQL('mydb').query_db( query, data )

    @classmethod
    def update_dog(cls, data):
        query = 'UPDATE dogs SET name=%(name)s, breed=%(breed)s, age=%(age)s, updated_at=NOW() WHERE id = %(dog_id)s'
        
        return connectToMySQL('mydb').query_db( query, data )