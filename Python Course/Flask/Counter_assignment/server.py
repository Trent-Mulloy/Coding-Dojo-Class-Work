from flask import Flask, render_template, session, redirect
app = Flask(__name__)    
app.secret_key = 'keep it secret, keep it safe'


	


@app.route('/')
def render_lists():
    if "count" not in session:
        session['count'] = 0
    return render_template("index.html", x=session["count"])

@app.route('/count')
def add_count():
    # add 1 to session[count]
    session["count"] += 1
    return redirect ('/')

@app.route('/clear')
def clear_count():
    session.clear()
    return redirect ('/')
































if __name__=="__main__":
    app.run(debug=True)

