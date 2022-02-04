from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re 

class Gold_Star:
    def __init__(self, data):
        self.id = data['id']
        self.soldier_first_name = data['soldier_first_name']
        self.soldier_last_name = data['soldier_last_name']
        self.rank_branch = data['rank_branch']
        self.applicant_first_name = data['applicant_first_name']
        self.applicant_last_name = data['applicant_last_name']
        self.applicant_email = data['applicant_email']
        self.applicant_phone_number = data['applicant_phone_number']
        self.content = data['content']
        self.college_for_child = data['college_for_child']
        self.counseling = data['counseling']
        self.housing = data['housing']
        self.relocation = data['relocation']
        self.bills = data['bills']
        slef.VA_benefits = data['VA_benefits']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def add_app2(cls, data):
        query = 'INSERT INTO gold_star_apps (soldier_first_name, soldier_last_name, rank_branch, applicant_first_name, applicant_last_name, applicant_email, applicant_phone_number, content, college_for_child, counseling, housing, relocation, bills, VA_benefits, created_at, user_id) VALUES (%(soldiers_first_name)s, %(soldiers_last_name)s, %(rank_branch)s, %(applicant_first_name)s, %(applicant_last_name)s, %(applicant_email)s, %(applicant_phone_number)s, %(content)s, %(college_for_child)s, %(counseling)s, %(housing)s, %(relocation)s, %(bills)s, %(VA_benefits)s, NOW(), %(user_id)s)'
        
        return connectToMySQL('CSM').query_db( query, data )