from flask import Flask, session, g, render_template, request, jsonify
from youtube import youtube_search

# Create the Flask application and the Flask-SQLAlchemy object.
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/view')
def view():
    return render_template('view.html')

@app.route('/youtube')
def youtube():
    if request.args.get('q', ''):
        # todo cleanse this?
        videos = youtube_search({'q': request.args.get('q', ''), 'maxResults': 25})
        return jsonify({'results': videos })
    return jsonify({'results': []})

import models
