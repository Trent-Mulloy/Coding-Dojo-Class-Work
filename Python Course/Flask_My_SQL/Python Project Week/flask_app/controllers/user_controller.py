from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.user import User
from flask import flash

@app.route('/')
def index():
    return render_template ('index.html')

@app.route("/Register", methods=['POST'])
def update1():
    
    
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"],
        "password": request.form["password"],
        "cpassword": request.form["cpassword"],
        }
    if not User.validate_user(data):
        return redirect("/")
    
    user_in_db = User.get_by_email(data)
    
    if user_in_db:
        flash("Email, already exists")
        return redirect("/")
    
    data['password'] = bcrypt.generate_password_hash(request.form['password'])
    
    User.add_user(data)
    return redirect ('/')


@app.route('/login', methods=['POST'])
def login():
    
    data = { "email" : request.form["email"] }
    user_in_db = User.get_by_email(data)
    
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        
        flash("Invalid Email/Password")
        return redirect('/')
    
    session['user_id'] = user_in_db.id
    
    return redirect("/dashboard")

@app.route('/dashboard')
def home():
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
        
    data = {
        "user_id" : session["user_id"]
    }
    user = User.get_by_id(data)
    return render_template ('home.html', user = user)

@app.route('/logout')
def logout():
    session.clear()
    return redirect ('/')

    

