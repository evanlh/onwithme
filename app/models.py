from . import app
from flask.ext.restless import APIManager
from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)
# Create the database tables.
db.create_all()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))

class Experience(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    url = db.Column(db.String(2048))
    start = db.Column(db.DateTime)
    duration = db.Column(db.Integer) #in seconds
    creator_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    creator = db.relationship('User', backref=db.backref('user', lazy='dynamic'))

# Create the Flask-Restless API manager.
manager = APIManager(app, flask_sqlalchemy_db=db)
# Create API endpoints, which will be available at /api/<tablename> by
# default. Allowed HTTP methods can be specified as well.
manager.create_api(User, methods=['GET', 'POST', 'DELETE'], exclude_columns=['password'])
manager.create_api(Experience, methods=['GET', 'POST', 'DELETE'])
