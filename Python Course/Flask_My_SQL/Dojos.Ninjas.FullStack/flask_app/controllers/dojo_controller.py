from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.dojo import Dojo

@app.route('/do_create_dojo', methods=['POST'])
def update():
    data = {
        "name": request.form["NewDojoName"],
    }
    Dojo.add_dojo(data)
    return redirect ('/')

@app.route('/<int:dojo_id>')
def one_dojo(dojo_id):

    data = {
        "dojo_id" : dojo_id
    }
    dojo = Dojo.one_dojo(data)

    return render_template('Show_one.html', dojo = dojo)

@app.route('/deletedojo/<int:dojo_id>')
def delete_dojo(dojo_id):

    data = {
        "dojo_id" : dojo_id
    }
    dojo = Dojo.delete_dojo(data)
    return redirect('/')