from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

@app.route('/')
def Home():

    ninjas = Ninja.all_ninjas()
    dojos = Dojo.all_dojos()

    return render_template('home.html', ninjas = ninjas, dojos = dojos)

@app.route("/addninja")
def add_ninja():
    dojos = Dojo.all_dojos()
    return render_template('add_ninja.html', dojos = dojos)



@app.route("/do_create_ninja", methods=['POST'])
def update1():
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "age": request.form["age"],
        "dojos_id": request.form["location"]
    }
    Ninja.add_ninja(data)
    return redirect ('/')
    

