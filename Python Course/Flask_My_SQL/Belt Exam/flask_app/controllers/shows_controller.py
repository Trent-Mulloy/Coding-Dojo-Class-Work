from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.shows import Show
from flask_app.models.likes import Like
from flask import flash


@app.route('/new/show')
def new_show_page():
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    return render_template ('new_show.html')

@app.route("/new_show", methods=['POST'])
def add_new_show_to_db():
    
    data = {
        "title": request.form["title"],
        "network": request.form["network"],
        "release_date": request.form["release_date"],
        "description": request.form["description"],
        "user_id": session['user_id']
    }

    if not Show.validate_show(data):
        return redirect("/new/show")

    Show.add_show(data)
    return redirect ('/dashboard')

@app.route('/show/<int:show_id>')
def one_show_info(show_id):
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    
    data = {
        "show_id" : show_id
    }
    show = Show.one_show(data)
    likes = Like.one_show_likes(data)
    count = 0
    for like in likes:
        count += 1
    return render_template ('show_info.html', show = show, count = count)

@app.route('/edit/<int:show_id>')
def edit_show_page(show_id):
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')

    data = {
        "show_id" : show_id
    }
    show = Show.one_show(data)

    return render_template ('edit_show.html', show = show)

@app.route("/update_show/<int:show_id>", methods=['POST'])
def update_show_in_db(show_id):
    
    data = {
        "show_id" : show_id,
        "title": request.form["title"],
        "network": request.form["network"],
        "release_date": request.form["release_date"],
        "description": request.form["description"],
    }

    if not Show.validate_show(data):
        return redirect(f"/edit/{show_id}")

    Show.update_show(data)
    return redirect ('/dashboard')

@app.route("/delete_show/<int:show_id>")
def delete_show(show_id):

    data = {
        "show_id" : show_id
    }

    Show.delete_show(data)
    return redirect("/dashboard")


