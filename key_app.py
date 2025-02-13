from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import google.generativeai as gpt
from dotenv import load_dotenv
import os

load_dotenv()




app = Flask(__name__)

# Allow CORS for all routes from the specified origin
CORS(app, resources={r"/*": {"origins": "http://localhost:5500"}})

@app.route("/submit-answers", methods=["POST"])
def submit_answers():
    try:
        data = request.get_json(force=True)  # Force JSON parsing
        print("Received data:", data)  # Log the received data
        if not data:
            return jsonify({"error": "No data received"}), 400
        return jsonify({"message": "Answers received successfully", "data": data})
    except Exception as e:
        print("Error:", e)  # Log the error
        return jsonify({"error": str(e)}), 400



@app.route("/questions1")
def questions():
    data = request.get_json(force=True)  # Force JSON parsing
    print("Received data:", data)  # Log the received data
    if not data:
        return jsonify({"error": "No data received"}), 400
    #take the all answers and generate question1  using gpt
    #generate question1
    #based on the answers and prompt
    
    prompt = "act as carrer advisor and generate questions based on the answers"
    question1 = gpt.generate_question(data, prompt)
    #return question1
    return jsonify({"message": "Questions received successfully", "data": question1})
    


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)