from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.stories import Story
from flask_app.models.messages import Message
from flask_app.models.user import User
from flask import flash

@app.route('/show/stories')
def show_stories():
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
        
    data = {
        "user_id" : session["user_id"]
    }
    story = Story.get_all()
    user = User.get_by_id(data)

    return render_template ('stories.html', story = story, user = user)
    
@app.route('/add/story')
def add_story():
    return render_template ('add_story.html')

@app.route("/Submit/story", methods=['POST'])
def submit_story():
    
    
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "branch": request.form['branch'],
        "years": request.form["years"],
        "content": request.form["content"],
        "user_id": session['user_id']
        }
    
    Story.add_story(data)
    return redirect ('/show/stories')

@app.route('/view/story/<int:story_id>')
def view_story(story_id):
    data = {
        'story_id': story_id
    }
    story = Story.get_by_id(data)
    message = Message.get_message_by_id(data)
    return render_template ('view_story.html', story = story, message = message)


@app.route("/Submit/message/<int:story_id>", methods=['POST'])
def submit_message(story_id):
    
    
    data = {
        "content": request.form["content"],
        'story_id': story_id,
        'user_id': session['user_id']
        }
    
    Story.add_message(data)
    return redirect (f'/view/story/{story_id}')


@app.route('/delete/story/<int:story_id>')
def delete_story(story_id):
    data = {
        'story_id': story_id
    }
    Story.delete_story(data)
    return redirect ('/show/stories')