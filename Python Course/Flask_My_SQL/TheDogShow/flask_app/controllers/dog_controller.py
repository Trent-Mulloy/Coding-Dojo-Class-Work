from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.user import User
from flask_app.models.dog import Dog
from flask import flash

@app.route('/show_one_dog/<int:dog_id>')
def show_one_dog(dog_id):
    data = {
        "dog_id" : dog_id
    }
    dog = Dog.one_dog(data)

    return render_template ('show_one_dog.html', dog = dog)

@app.route('/add_dog')
def add_dog():

    return render_template ('add_dog.html')

@app.route("/register_dog", methods=['POST'])
def do_add_dog():
    
    data = {
        "name": request.form["name"],
        "breed": request.form["breed"],
        "age": request.form["age"],
        "user_id": session['user_id']
    }

    
    Dog.add_dog(data)
    return redirect ('/dashboard')

@app.route('/edit_dog/<int:dog_id>')
def edit_dog(dog_id):
    data = {
        "dog_id" : dog_id
    }
    dog = Dog.one_dog(data)

    return render_template('edit_dog.html', dog = dog)

@app.route("/update_dog/<int:dog_id>", methods=['POST'])
def update_dog(dog_id):
    
    data = {
        "name": request.form["name"],
        "breed": request.form["breed"],
        "age": request.form["age"],
        "dog_id" : dog_id
    }

    
    Dog.update_dog(data)
    return redirect ('/dashboard')