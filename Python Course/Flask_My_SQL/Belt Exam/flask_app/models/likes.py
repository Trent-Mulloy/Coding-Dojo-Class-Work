from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user
from flask_app.models import shows

class Like:
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.show_id = data['show_id']

        

    @classmethod
    def one_show_likes(cls, data):
        query = "SELECT * FROM likes WHERE show_id = %(show_id)s ;"
        
        return connectToMySQL('tv_shows').query_db(query, data)
        
        
        
