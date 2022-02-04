from flask_app import app
from flask_app.controllers import user_controller
from flask_app.controllers import assistance_app_controller
from flask_app.controllers import gold_star_controller
from flask_app.controllers import rental_listing_controller
from flask_app.controllers import store_controller
from flask_app.controllers import listings_controller
from flask_app.controllers import story_controller

if __name__=="__main__":   
    app.run(debug=True)     