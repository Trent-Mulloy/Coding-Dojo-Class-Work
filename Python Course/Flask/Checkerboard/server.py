from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    

@app.route('/')
def index():
    return render_template("index.html", row=8, col=8)	
	
@app.route('/<int:x>')
def rows(x):
    return render_template("index.html", row=x, col=8)

@app.route('/<int:x>/<int:y>')
def size(x,y):
    return render_template("index.html", row=x, col=y)























if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.


