from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.store import Store
from flask_app.models.rental_listing import Rental
from flask import flash

@app.route('/listings/<int:zip_code>')
def show_listings(zip_code):
    data = {
        "zip_code": zip_code
    }

    store = Store.get_by_zip(data)
    rental = Rental.get_by_zip(data)

    return render_template('listings.html', store = store, rental = rental)

@app.route('/submit/zip', methods=['POST'])
def filter():
    
    zip_code = request.form['zip']
    

    return redirect(f'/listings/{zip_code}')