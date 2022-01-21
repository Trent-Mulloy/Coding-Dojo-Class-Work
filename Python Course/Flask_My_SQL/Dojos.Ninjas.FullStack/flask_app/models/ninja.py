from flask_app.config.mysqlconnection import connectToMySQL

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
    
    @classmethod
    def add_ninja(cls, data):
        query = 'INSERT INTO ninjas ( first_name, last_name, age, dojos_id) VALUES (%(fname)s, %(lname)s, %(age)s, %(dojos_id)s)'
        
        return connectToMySQL('mydb').query_db( query, data )