from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

class Show:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.network = data['network']
        self.release_date = data['release_date']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.user = {}
        self.likes = {}

    @classmethod
    def display(cls):
        query = "SELECT * FROM shows LEFT JOIN users ON shows.user_id = users.id;"
        
        results = connectToMySQL('tv_shows').query_db(query)

        shows = []

        for row in results:
            show = cls(row)

            user_data = {
                "id" : row['users.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "password" : row['password'],
                "created_at" : row['users.created_at'],
                "updated_at" : row['users.updated_at']
            }

            show.user = user.User(user_data)

            shows.append( show )

        return shows

    @staticmethod
    def validate_show(data):
        is_valid = True
        if len(data["title"]) < 3:
            flash("title must be at least 3 charecters long!")
            is_valid = False
        if len(data["network"]) < 3:
            flash("network must be at least 3 charecters long!")
            is_valid = False
        if len(data["release_date"]) < 3:
            flash("release_date must be filled out")
            is_valid = False
        if len(data["description"]) < 3:
            flash("description must be at least 3 charecters long!")
            is_valid = False
        return is_valid 

    @classmethod
    def add_show(cls, data):
        query = 'INSERT INTO shows ( title, network, release_date, description, created_at, user_id) VALUES (%(title)s, %(network)s, %(release_date)s, %(description)s, NOW(), %(user_id)s)'
        
        return connectToMySQL('tv_shows').query_db( query, data )

    @classmethod
    def one_show(cls, data):
        query = "SELECT * FROM shows JOIN users ON shows.user_id = users.id WHERE shows.id = %(show_id)s;"
        results = connectToMySQL('tv_shows').query_db(query, data)

        shows = []

        for row in results:
            show = cls(row)

            user_data = {
                "id" : row['users.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "password" : row['password'],
                "created_at" : row['users.created_at'],
                "updated_at" : row['users.updated_at']
            }
            show.user = user.User(user_data)\

            shows.append( show )
            

        return shows


    @classmethod
    def update_show(cls, data):
        query = "UPDATE shows SET title=%(title)s, network=%(network)s, release_date=%(release_date)s, description=%(description)s, updated_at=NOW() WHERE id = %(show_id)s;"
        results = connectToMySQL('tv_shows').query_db(query, data)
        
        return connectToMySQL('tv_shows').query_db( query, data ) 

    @classmethod
    def delete_show(cls, data):
        query = "DELETE FROM shows WHERE id = %(show_id)s;"
        
        return connectToMySQL('tv_shows').query_db( query, data )
        