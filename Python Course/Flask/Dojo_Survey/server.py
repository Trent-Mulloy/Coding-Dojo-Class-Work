from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)    
app.secret_key = 'keep it secret, keep it safe'


	


@app.route('/')
def render():
    return render_template("index.html")

@app.route('/update', methods=['POST'])
def update():
    print(request.form)
    session['name']= request.form['name']
    session['lang']= request.form['lang']
    session['loc']= request.form['location']
    session['comm']= request.form['comment']
    return redirect ('/result')

@app.route('/result')
def result():
    if 'name' not in session:
        session['name']= "Not Avail"
    if 'lang' not in session:
        session['lang']= "No Language"
    if 'loc' not in session:
        session['loc']= "location unknown"
    if 'comm' not in session:
        session['comm']= "No Comment's"
    return render_template("result.html", name=session['name'], lang=session['lang'], loc=session['loc'], comm=session['comm'])















if __name__=="__main__":
    app.run(debug=True)

