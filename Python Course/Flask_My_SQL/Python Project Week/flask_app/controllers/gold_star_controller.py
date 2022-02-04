from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.gold_star import Gold_Star
from flask import flash

@app.route('/gold/star/app')
def app2():
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    
    return render_template ('gold_star_application.html')

@app.route("/Submit/app2", methods=['POST'])
def submit_app_2():
    if "college_for_child" not in request.form:
        cfc = "False"
    else:
        cfc = request.form['college_for_child']
    if "counseling" not in request.form:
        coun = "False"
    else:
        coun = request.form['counseling']
    if "housing" not in request.form:
        house = "False"
    else:
        house = request.form['housing']
    if "relocation" not in request.form:
        relo = "False"
    else:
        relo = request.form['relocation']
    if "bills" not in request.form:
        bill = "False"
    else:
        bill = request.form['bills']
    if "VA_benefits" not in request.form:
        VA = "False"
    else:
        VA = request.form['VA_benefits']
    data = {
        "soldiers_first_name": request.form['soldiers_first_name'],
        "soldiers_last_name": request.form["soldiers_last_name"],
        "rank_branch": request.form["rank_branch"],
        "applicant_first_name": request.form["applicant_first_name"],
        "applicant_last_name": request.form["applicant_last_name"],
        "applicant_email": request.form["applicant_email"],
        "applicant_phone_number": request.form["applicant_phone_number"],
        "content": request.form['content'],
        "college_for_child": cfc,
        "counseling": coun,
        "housing": house,
        "relocation": relo,
        "bills": bill,
        "VA_benefits": VA,
        "user_id": session['user_id']
        }
    
    Gold_Star.add_app2(data)
    return redirect ('/dashboard')