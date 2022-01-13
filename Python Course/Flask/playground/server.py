from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    

@app.route('/<int:x>/<color>')
def index(x, color):
    return render_template("index.html", phrase="", times=x, background=color )	





























if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.