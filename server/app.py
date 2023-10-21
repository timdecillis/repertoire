from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__)


# Import the Python functions that correspond to your controllers.js
from controllers import find_band, get_songs, add_song, delete_song, update_song, update_notes, create_user

# Use the 'morgue' Python equivalent for logging (optional)
import logging
logger = logging.getLogger(__name__)

# Serve static files from the 'client/dist' directory
@app.route('/static/<path:filename>')
def send_static(filename):
    return send_from_directory('client/dist', filename)

# Define the routes for your application
@app.route('/findBand', methods=['POST'])
def find_band():
    try:
        data = request.get_json()
        result = find_band(data)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/users', methods=['POST'])
def create_user():
    try:
        data = request.get_json()
        create_user(data)
        return '', 201  # HTTP 201 Created
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/addSong', methods=['POST'])
def add_song():
    try:
        data = request.get_json()
        add_song(data)
        return '', 201  # HTTP 201 Created
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/getSongs', methods=['GET'])
def get_songs():
    try:
        result = get_songs()
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/deleteSong', methods=['DELETE'])
def delete_song():
    try:
        data = request.get_json()
        delete_song(data)
        return '', 203  # HTTP 203 Non-Authoritative Information
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/updateSong', methods=['PUT'])
def update_song():
    try:
        data = request.get_json()
        update_song(data)
        return '', 202  # HTTP 202 Accepted
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/updateNotes', methods=['PUT'])
def update_notes():
    try:
        data = request.get_json()
        update_notes(data)
        return '', 202  # HTTP 202 Accepted
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()

