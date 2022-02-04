from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.rental_listing import Rental
from flask import flash


@app.route('/add/rental')
def new_rental():
    return render_template ('new_rental.html')

@app.route("/Submit/rental", methods=['POST'])
def submit_rental():
    
    
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "phone_number": request.form["phone_number"],
        "email": request.form["email"],
        "rent": request.form["rent"],
        "address": request.form['address'],
        "zip_code": request.form['zip_code'],
        "content": request.form["content"],
        }
    
    Rental.add_rental(data)
    return redirect ('/dashboard')