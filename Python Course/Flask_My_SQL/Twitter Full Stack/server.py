from flask import Flask, render_template, request, redirect
app = Flask(__name__)  

from user import User

@app.route('/')
def index():

    users = User.all_users()

    print(users)

    return render_template('index.html', users = users)

@app.route('/<int:user_id>')
def index2(user_id):
    # call on get one user query
    data = {
        "user_id" : user_id
    }
    user = User.one_user(data)

    return render_template('show_user.html', user = user)

if __name__=="__main__":   
    app.run(debug=True)     