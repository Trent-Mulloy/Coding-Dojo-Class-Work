from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.shows import Show
from flask_app.models.user import User
from flask import flash

@app.route("/like/<int:show_id>")
def like_show(show_id):

    data = {
        "show_id" : show_id,
        "user_id" : session["user_id"]
    }
    like = Like.like_show(data)
    return redirect("/dashboard", like = like)

    