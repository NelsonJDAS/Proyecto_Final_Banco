"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/Users')
def getUsers():
    Users = User.query.all()
    return jsonify([user.serialize() for user in Users])

@api.route('/addUser', methods=['POST'])
def addUser():
    data = request.get_json()
    if data.get("email") is None or data.get("email") is "":
        return jsonify({"Mensaje": "The email is missing"}), 400
    elif data.get("password") is None or data.get("password") is "":
        return jsonify({"Mensaje": "The password is missing"}), 400
    elif data.get("is_active") is None or data.get("is_active") is "":
        return jsonify({"Mensaje": "The is_active is missing"}), 400
    try:
        new_user = User(
            email= data.get("email"),
            password= data.get("password"),
            is_active=data.get("is_active")
        )
        db.session.add(new_user)
        db.session.commit()
        
        access_token = create_access_token(identity=data.get('id'))
        return jsonify({"mensaje": 'Usuario Agregado',"token" : access_token}), 201    
    except Exception as e:
        return jsonify({"error": str(e)}), 400         
    



    
    