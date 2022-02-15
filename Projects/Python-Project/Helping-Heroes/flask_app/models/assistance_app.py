from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 

class App:
    def __init__(self, data):
        self.id = data['id']
        self.branch = data['branch']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.phone_number = data['phone_number']
        self.size_of_family = data['size_of_family']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def add_app1(cls, data):
        query = 'INSERT INTO assistance_apps (branch, first_name, last_name, email, phone_number, size_of_family, content, created_at, user_id) VALUES (%(branch)s, %(fname)s, %(lname)s, %(email)s, %(phone_number)s, %(size_of_family)s, %(content)s, NOW(), %(user_id)s)'
        
        return connectToMySQL('CSM').query_db( query, data )
