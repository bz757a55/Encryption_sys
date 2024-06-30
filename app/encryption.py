from cryptography.fernet import Fernet

# Generate a new encryption key
KEY = Fernet.generate_key()
cipher_suite = Fernet(KEY)

def encrypt_text(plain_text):
    encrypted_text = cipher_suite.encrypt(plain_text.encode())
    return encrypted_text.decode()

def decrypt_text(encrypted_text):
    decrypted_text = cipher_suite.decrypt(encrypted_text.encode())
    return decrypted_text.decode()
