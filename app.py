from flask import Flask, request, jsonify, render_template
import os
import random
from supabase import create_client, Client
from dotenv import load_dotenv
load_dotenv()
url: str = os.environ.get("SUPABASE_URL") # this needs to be replaced in .env file
key: str = os.environ.get("SUPABASE_KEY") # this needs to be replaced in .env file
supabase: Client = create_client(url, key)

app = Flask(__name__)
@app.route('/')
def main():

    notes = supabase.table("notes").select("text").execute()
    print(notes)
    notes = notes.data
    return render_template('index.html', notes=notes)
@app.route('/submit-note', methods=['POST'])
def submit_note():
    data = request.get_json()
    note = data.get('note')
    response = supabase.table("notes").insert({
        "id": random.randint(0, 99999),
        "text": note
    }).execute()
    print(response)

    print("Adding", note)
    return jsonify({"status": "success"}), 200

if __name__ == "__main__":
    
    app.run(host='192.168.0.200', port=5000, debug=True)