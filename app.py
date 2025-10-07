from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
@app.route('/')
def main():
    return render_template('index.html')
@app.route('/submit-note', methods=['POST'])
def submit_note():
    data = request.get_json()
    note = data.get('note')
    print("Adding", note)
    return jsonify({"status": "success"}), 200

if __name__ == "__main__":
    
    app.run(host='192.168.0.200', port=5000, debug=True)