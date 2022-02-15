from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 

class Message:
    def __init__(self, data):
        self.user_id = data['user_id']
        self.story_id = data['story_id']
        self.content = data['Content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_message_by_id(cls, data):
        query = "SELECT * FROM messages WHERE story_id = %(story_id)s;"
        results = connectToMySQL('CSM').query_db(query, data)

        messages = []

        for message_data in results:
    
            message = cls(message_data)
            messages.append(message)
        
        return messages