from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def all_users(cls):
        query = "SELECT * FROM Users;"
        results = connectToMySQL('mydb').query_db(query)

        users = []

        for user_data in results:
            # User(user_data)
            user = cls(user_data)
            users.append(user)
        
        return users
    
    @classmethod
    def add_user(cls, data):
        query = 'INSERT INTO Users ( first_name, last_name, email) VALUES (%(fname)s, %(lname)s, %(email)s)'
        
        return connectToMySQL('mydb').query_db( query, data )

    @classmethod
    def one_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return cls(results[0]) 

    @classmethod
    def edit_user(cls, data):
        query = "UPDATE users SET first_name=%(fname)s, last_name=%(lname)s, email=%(email)s WHERE id = %(idnum)s;"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return connectToMySQL('mydb').query_db( query, data ) 

    @classmethod
    def delete_user(cls, data):
        query = "DELETE FROM users WHERE id = %(idnum)s"
        results = connectToMySQL('mydb').query_db(query, data)
        
        return connectToMySQL('mydb').query_db( query, data ) 
    

