import os
import json
from openai import Configuration, OpenAIApi
from models import getSongs, saveSong, deleteSong, updateSong, updateNotes, createUser

configuration = Configuration(
    api_key=os.environ.get('API_KEY')
)
openai = OpenAIApi(configuration)

def find_band(req, res):
    if not configuration.api_key:
        res.status(500).json({
            'error': {
                'message': 'OpenAI API key not configured, please follow instructions in README.md',
            }
        })
        return

    band = req.get('band', '')
    instrument = req.get('instrument', '')
    difficulty = req.get('difficulty', '')

    if not band.strip():
        res.status(400).json({
            'error': {
                'message': 'Please enter a valid band',
            }
        })
        return

    try:
        completion = openai.create_chat_completion(
            model='gpt-3.5-turbo',
            messages=[
                {'role': 'system', 'content': 'You are a helpful assistant.'},
                {'role': 'user', 'content': generate_prompt(band, instrument, difficulty)},
            ],
            temperature=0
        )
        res.status(200).json(json.loads(completion['choices'][0]['message']['content']))
    except Exception as error:
        if hasattr(error, 'response'):
            print(error.response.status, error.response.data)
            res.status(error.response.status).json(error.response.data)
        else:
            print(f'Error with OpenAI API request: {str(error)}')
            res.status(500).json({
                'error': {
                    'message': 'An error occurred during your request.',
                }
            })

def create_user(req, res):
    email = req.get('email', '')
    password = req.get('password', '')

    createUser(email, password)

    res.status(201)

def get_songs(req, res):
    email = req.query.get('email', '')

    result = getSongs(email)
    songs = result.get('songs', [])

    res.status(200).json(songs)

def add_song(req, res):
    saveSong(req)
    res.status(201)

def delete_song(req, res):
    email = req.get('email', '')
    song = req.get('song', '')
    artist = req.get('artist', '')

    deleteSong(email, song, artist)
    res.status(203)

def update_song(req, res):
    email = req.get('email', '')
    song = req.get('song', '')
    artist = req.get('artist', '')

    updateSong(email, song, artist)
    res.status(202)

def update_notes(req, res):
    email = req.get('email', '')
    song = req.get('song', '')
    artist = req.get('artist', '')
    notes = req.get('notes', '')

    updateNotes(email, song, artist, notes)
    res.status(202)

def generate_prompt(band, instrument='guitar', difficulty='beginner'):
    capitalized_band = band[0].upper() + band[1:].lower()
    return f'You are an expert music teacher. You have been asked to provide 3 songs by {capitalized_band} for a {difficulty}-level player to learn on the {instrument}. Take into consideration tempo, song complexity, and technical difficulty. Return only a JSON object, with this format: {{"artist": "{capitalized_band}", "songs": ["song 1", "song 2", "song 3"]}}.'
