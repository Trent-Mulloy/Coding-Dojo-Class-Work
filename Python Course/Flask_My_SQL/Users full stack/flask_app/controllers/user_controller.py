from flask_app import app
from flask import render_template, request, redirect


from flask_app.models.user import User

@app.route('/')
def index():

    users = User.all_users()

    print(users)

    return render_template('Read.html', users = users)

@app.route('/update', methods=['POST'])
def update():
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.add_user(data)
    return redirect ('/')

@app.route('/Create')
def index2():

    return render_template('Create.html')


@app.route('/show_one/<int:user_id>')
def one_user(user_id):

    data = {
        "user_id" : user_id
    }
    user = User.one_user(data)

    return render_template('show_one.html', user = user)

@app.route('/edit_user/<int:user_id>')
def edit_user(user_id):

    data = {
        "user_id" : user_id
    }
    user = User.one_user(data)

    return render_template('edit_user.html', user = user)

@app.route('/do_edit_user/<int:user_id>', methods=['POST'])
def do_edit_user(user_id):
    data = {
        "idnum" : user_id,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.edit_user(data)
    return redirect (f'/show_one/{user_id}')

@app.route('/delete_user/<int:user_id>')
def do_delete_user(user_id):
    data = {
        "idnum" : user_id,
    }
    User.delete_user(data)
    return redirect ('/')