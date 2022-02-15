from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 

class Story:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.branch = data['branch']
        self.years_served = data['years_served']
        self.content = data['Content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def add_story(cls, data):
        query = 'INSERT INTO stories (first_name, last_name, branch, years_served, content, created_at, user_id) VALUES (%(fname)s, %(lname)s, %(branch)s, %(years)s, %(content)s, NOW(), %(user_id)s)'
        
        return connectToMySQL('CSM').query_db( query, data )

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM stories;"
        results = connectToMySQL('CSM').query_db(query)

        stories = []

        for story_data in results:
    
            story = cls(story_data)
            stories.append(story)
        
        return stories

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM stories WHERE id = %(story_id)s;"
        results = connectToMySQL('CSM').query_db(query, data)

        stories = []

        for story_data in results:
    
            story = cls(story_data)
            stories.append(story)
        
        return stories

    @classmethod
    def add_message(cls, data):
        query = 'INSERT INTO messages (user_id, story_id, Content, created_at) VALUES (%(user_id)s, %(story_id)s, %(content)s, NOW())'
        
        return connectToMySQL('CSM').query_db( query, data )

    @classmethod
    def delete_story(cls, data):
        query = "DELETE FROM stories WHERE id = %(story_id)s;"
        
        return connectToMySQL('CSM').query_db( query, data )