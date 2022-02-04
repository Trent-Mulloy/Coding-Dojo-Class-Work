from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 

class Store:
    def __init__(self, data):
        self.id = data['id']
        self.business_name = data['business_name']
        self.contact_name = data['contact_name']
        self.phone_number = data['phone_number']
        self.email = data['email']
        self.address = data['address']
        self.zip_code = data['zip_code']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def add_store(cls, data):
        query = 'INSERT INTO store_contractor (business_name, contact_name, phone_number, email, address, zip_code, content, created_at) VALUES (%(bname)s, %(cname)s, %(phone_number)s, %(email)s, %(address)s, %(zip_code)s, %(content)s, NOW())'
        
        return connectToMySQL('CSM').query_db( query, data )

    @classmethod
    def get_by_zip(cls, data):
        query = "SELECT * FROM store_contractor WHERE zip_code = %(zip_code)s;"
        results = connectToMySQL('CSM').query_db(query, data)

        stores = []

        for store_data in results:
    # User(user_data)
            store = cls(store_data)
            stores.append(store)
        
        return stores