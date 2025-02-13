from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai


load_dotenv()

genai.configure(api_key=os.getenv("API_KEY"))

app = Flask(__name__)

Capp = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/submit-answers", methods=["POST"])
def submit_answers():
    data = request.get_json()  # Read the JSON data sent from the frontend
    print("Received answers:", data)  # Print in console for debugging
    return jsonify({"message": "Answers received successfully", "data": data})



# app.route("/generate")
# def generate():
#    #read the answer from all the answer test.html
   
    
    
    
    
    

if __name__ == "__main__":
    app.run(debug=True)
