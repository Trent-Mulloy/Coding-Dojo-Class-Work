from flask_app import app
from flask import render_template, request, redirect, session
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.recipe import Recipe
from flask_app.models.user import User
from flask import flash

@app.route('/new/recipe')
def new_recipe_page():
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    return render_template ('new_recipe.html')


@app.route("/new_recipe", methods=['POST'])
def add_new_recipe_to_db():
    
    data = {
        "name": request.form["name"],
        "under30": request.form["under30"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "user_id": session['user_id']
    }

    if not Recipe.validate_recipe(data):
        return redirect("/new/recipe")

    Recipe.add_recipe(data)
    return redirect ('/dashboard')

@app.route('/recipes/<int:recipe_id>')
def show_one_recipe(recipe_id):
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    
    data = {
        "recipe_id" : recipe_id
    }
    recipe = Recipe.one_recipe(data)

    return render_template ('show_one_recipe.html', recipe = recipe)
    

@app.route('/recipes/edit/<int:recipe_id>')
def edit_one_recipe(recipe_id):
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    
    data = {
        "recipe_id" : recipe_id
    }
    recipe = Recipe.one_recipe(data)

    return render_template ('edit_one_recipe.html', recipe = recipe)
    
@app.route("/do_edit_recipe/<int:recipe_id>", methods=['POST'])
def update_recipe_in_db(recipe_id):
    
    data = {
        "name": request.form["name"],
        "under30": request.form["under30"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "user_id": session['user_id'],
        "recipe_id" : recipe_id
    }

    if not Recipe.validate_recipe(data):
        return redirect(f"/recipes/edit/{recipe_id}")

    Recipe.update_recipe(data)
    return redirect ('/dashboard')

@app.route('/recipes/delete/<int:recipe_id>')
def delete_one_recipe(recipe_id):
    if 'user_id' not in session:
        flash("Please login or register before entering site!")
        return redirect('/')
    
    data = {
        "recipe_id" : recipe_id
    }
    recipe = Recipe.delete_recipe(data)

    return redirect ('/dashboard')