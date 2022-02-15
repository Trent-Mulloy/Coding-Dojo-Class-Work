from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.store import Store
from flask import flash


@app.route('/add/store')
def new_store():
    return render_template ('new_store.html')

@app.route("/Submit/store", methods=['POST'])
def submit_store():
    
    
    data = {
        "bname": request.form["bname"],
        "cname": request.form["cname"],
        "phone_number": request.form["phone_number"],
        "email": request.form["email"],
        "address": request.form['address'],
        "zip_code": request.form['zip_code'],
        "content": request.form["content"],
        }
    
    Store.add_store(data) 
    return redirect ('/dashboard')