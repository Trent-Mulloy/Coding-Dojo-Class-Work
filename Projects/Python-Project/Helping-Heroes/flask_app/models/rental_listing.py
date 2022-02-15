from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 

class Rental:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.phone_number = data['phone_number']
        self.email = data['email']
        self.rent = data['rent']
        self.address = data['address']
        self.zip_code = data['zip_code']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add_rental(cls, data):
        query = 'INSERT INTO rental_listing (first_name, last_name, phone_number, email, rent, address, zip_code, content, created_at) VALUES (%(fname)s, %(lname)s, %(phone_number)s, %(email)s, %(rent)s, %(address)s, %(zip_code)s, %(content)s, NOW())'
        
        return connectToMySQL('CSM').query_db( query, data )

    @classmethod
    def get_by_zip(cls, data):
        query = "SELECT * FROM rental_listing WHERE zip_code = %(zip_code)s;"
        results = connectToMySQL('CSM').query_db(query, data)

        rentals = []

        for rental_data in results:
    
            rental = cls(rental_data)
            rentals.append(rental)
        
        return rentals