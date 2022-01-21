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

@app.route('/deleteninja/<int:ninja_id>')
def delete_ninja(ninja_id):

    data = {
        "ninja_id" : ninja_id
    }
    ninja = Ninja.delete_ninja(data)
    return redirect('/')

@app.route('/editninja/<int:ninja_id>')
def one_ninja(ninja_id):
    dojos = Dojo.all_dojos()
    data = {
        "ninja_id" : ninja_id
    }
    ninja = Ninja.one_ninja(data)
    return render_template('edit_ninja.html', ninja = ninja, dojos = dojos)
    
@app.route('/do_edit_ninja/<int:ninja_id>', methods=['POST'])
def do_edit_ninja(ninja_id):
    data = {
        "ninja_id" : ninja_id,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "age" : request.form["age"],
        "dojos_id": request.form["location"]
    }
    Ninja.edit_ninja(data)
    return redirect ('/')
    

