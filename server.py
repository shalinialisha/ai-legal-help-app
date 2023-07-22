from flask import Flask, request, jsonify
import json
from models import generate_text 
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route('/generate', methods=['GET', 'POST'])
def generate():

  if request.method == 'POST':
    
    # Handle POST request
    text = request.json['text']
    generated = generate_text(text)
  
  else:

    # Handle GET request
    generated = "whoops"

  return {"generated": generated}



if __name__ == "__main__":
    app.run(debug=True)
