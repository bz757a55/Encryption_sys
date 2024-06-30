from flask import Blueprint, render_template, request, jsonify
from .encryption import encrypt_text, decrypt_text

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/encrypt', methods=['POST'])
def encrypt():
    text = request.form['text']
    encrypted_text = encrypt_text(text)
    if request.is_json:
        return jsonify(result=encrypted_text, action="Encryption")
    return render_template('result.html', result=encrypted_text, action="Encryption")

@main.route('/decrypt', methods=['POST'])
def decrypt():
    text = request.form['text']
    decrypted_text = decrypt_text(text)
    if request.is_json:
        return jsonify(result=decrypted_text, action="Decryption")
    return render_template('result.html', result=decrypted_text, action="Decryption")
