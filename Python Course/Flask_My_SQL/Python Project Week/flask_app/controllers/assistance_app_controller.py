from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.assistance_app import App
from flask import flash


@app.route('/application/for/assistance')
def app1():
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    
    return render_template ('assistive_application.html')


@app.route("/Submit/app1", methods=['POST'])
def submit_app_1():
    
    
    data = {
        "branch": request.form['branch'],
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"],
        "phone_number": request.form["phone_number"],
        "size_of_family": request.form["family_size"],
        "content": request.form["content"],
        "user_id": session['user_id']
        }
    
    App.add_app1(data)
    return redirect ('/dashboard')

