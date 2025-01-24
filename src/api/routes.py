"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cliente, Cuenta
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.mail_config import get_mail



# Para Flask-Mail, codigo de seguridad
from flask_mail import Message
import random


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/test')
def test():
    es_divisible_por_dos = lambda numero: True if numero % 2 == 0 else False
    for i in range(1, 101):
        new_user = User(
            email= f"ejemplo{i}",
            password= f"ejemplo{i}",
            is_active= es_divisible_por_dos(i)
        )
        db.session.add(new_user)
    db.session.commit() 
    
    Users = User.query.all()
    return jsonify([user.serialize() for user in Users]), 201


@api.route('/Users')
def getUsers():
    Users = User.query.all()
    return jsonify([user.serialize() for user in Users]), 201

@api.route('/User/Register', methods=['POST'])
def addUser():
    data = request.get_json()
    print('desde routes', data)

    # Datos del usuario
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    is_active = data.get("is_active", True)  # Default: activo

    # Validaciones básicas
    if not email or not name or not password:
        return jsonify({"mensaje": "Faltan datos obligatorios del usuario"}), 400

    try:
        # Crear usuario
        print("Creando usuario...")
        new_user = User(
            name=name,
            email=email,
            password=password,
            is_active=is_active
        )
        db.session.add(new_user)
        db.session.flush()  # Esto asegura que new_user.id esté disponible
        print("Usuario creado:", new_user)

        # Crear cliente asociado al usuario
        print("Creando cliente...")
        nuevo_cliente = Cliente(
            nombre_completo=name,
            apellidos="Introduzca apellido",
            telefono="Introduzca numero",
            direccion="Introduzca direccion",
            tipo_documento="",
        )
        db.session.add(nuevo_cliente)
        db.session.flush()  # Esto asegura que nuevo_cliente.id esté disponible
        print("Cliente creado:", nuevo_cliente)

        # Asociar el cliente al usuario
        new_user.cliente_id = nuevo_cliente.id
        db.session.add(new_user)  # Actualizar el usuario con el cliente asociado

        # Crear cuenta asociada al cliente
        print("Creando cuenta...")
        nueva_cuenta = Cuenta(
            numero_cuenta=f"CUENTA-{random.randint(1000, 9999)}",
            numero_tarjeta=f"TARJETA-{random.randint(1000, 9999)}",
            cvv=f"{random.randint(100, 999)}",
            caducidad="12/30",
            tipo_cuenta="Debito",
            saldo=0,
            saldo_retenido=0,
            cliente_id=nuevo_cliente.id,
            estado=1,
        )
        db.session.add(nueva_cuenta)
        print("Cuenta creada:", nueva_cuenta)

        # Confirmar los cambios
        db.session.commit()
        print("Cambios confirmados")

        # Generar un token para el usuario
        access_token = create_access_token(identity=new_user.id)
        return jsonify({
            "mensaje": "Usuario, cliente y cuenta creados exitosamente",
            "user": {
                "id": new_user.id,
                "name": new_user.name,
                "email": new_user.email
            },
            "token": access_token
        }), 201

    except Exception as e:
        db.session.rollback()  # Revertir cambios si hay un error
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 400
       
@api.route('/User/Login', methods=['POST'])
def user_autentication():
    # Obtener datos del cliente
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    print("Datos recibidos:", data)  # Log para depuración

    # Validaciones
    if not email:
        return jsonify({"Mensaje": "The email is missing"}), 400
    if not password:
        return jsonify({"Mensaje": "The password is missing"}), 400
    if not name:
        return jsonify({"Mensaje": "The name is missing"}), 400

    try:
        # Buscar usuario en la base de datos
        user = User.query.filter_by(name=name, email=email, password=password).first()

        if user is None:
            return jsonify({"mensaje": "Invalid password or email"}), 400
        
        # Crear token de acceso
        access_token = create_access_token(identity=user.name)

        # Responder con el usuario y el token
        return jsonify({
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
    },
    "token": access_token
        }), 200  # 200 para indicar éxito en login

    except Exception as e:
        print("Error en el backend:", str(e))  # Log para debugging
        return jsonify({"error": "An error occurred during login"}), 500

@api.route('/User/<int:id>')
def get_user_details(id):
    try:
        # Buscar el usuario por ID
        user = User.query.get(id)
        if not user:
            return jsonify({"error": "Usuario no encontrado"}), 404
        # Obtener el cliente asociado al usuario
        cliente = user.cliente
        if not cliente:
            return jsonify({"error": "El usuario no tiene un cliente asociado"}), 404
        # Obtener las cuentas del cliente
        cuentas = cliente.cuentas
        for cuenta in cuentas:
            # Calcular el saldo total de todas las cuentas
            # Obtener las transacciones asociadas a esta cuenta
            transacciones = cuenta.transacciones
            transacciones_data = [
                {
                    "id": transaccion.id,
                    "tipo": transaccion.tipo,
                    "monto": transaccion.monto,
                    "fecha": transaccion.fecha,
                    "descripcion": transaccion.descripcion
                }
                for transaccion in transacciones
            ]
        response = {
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            },
            "cliente": {
                "id": cliente.id,
                "nombre": cliente.nombre_completo,
                "apellidos": cliente.apellidos,
                "telefono": cliente.telefono,
                "direccion": cliente.direccion,
                "Tipo_de_documento": cliente.tipo_documento,
                "Numero_de_documento": cliente.numero_documento,
            },
            "cuentas": {
                "id": cuenta.id,
                "numero_cuenta": cuenta.numero_cuenta,
                "numero_tarjeta": cuenta.numero_tarjeta,
                "cvv": cuenta.cvv,
                "caducidad": cuenta.caducidad,
                "tipo_cuenta": cuenta.tipo_cuenta,
                "saldo": cuenta.saldo,
                "saldo_retenido": cuenta.saldo_retenido,
                "transacciones": transacciones_data
            }
        }
        return jsonify(response), 200
    except Exception as e:
        return jsonify({"error": "Ha ocurrido un error", "details": str(e)}), 500       

@api.route('/User/<int:id>/Perfil', methods=['PUT'])
def update_cliente_profile(id):
    perfil = request.get_json()  # Obtener los datos enviados en la solicitud

    # Buscar el usuario por ID
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    # Verificar si el usuario tiene un cliente asociado
    cliente = user.cliente
    if not cliente:
        return jsonify({"error": "El usuario no tiene un cliente asociado"}), 404

    # Obtener los datos enviados en la solicitud
    nombre_completo = perfil.get("nombre_completo")
    apellidos = perfil.get("apellidos")
    direccion = perfil.get("direccion")
    telefono = perfil.get("telefono")
    tipo_documento = perfil.get("tipo_documento")
    numero_documento = perfil.get("numero_documento")

    # Validar el número de documento si es único
    if numero_documento:
        existing_cliente = cliente.query.filter_by(numero_documento=numero_documento).first()
        if existing_cliente and existing_cliente.id != cliente.id:
            return jsonify({"error": "El número de documento ya está en uso por otro cliente"}), 400

    # Actualizar solo los campos enviados
    if nombre_completo:
        cliente.nombre_completo = nombre_completo
    if apellidos:
        cliente.apellidos = apellidos
    if telefono:
        cliente.telefono = telefono
    if direccion:
        cliente.direccion = direccion
    if tipo_documento:
        cliente.tipo_documento = tipo_documento
    if numero_documento:
        cliente.numero_documento = numero_documento

    # Guardar cambios en la base de datos
    db.session.commit()

    return jsonify({"mensaje": "Perfil del cliente actualizado exitosamente", "cliente": cliente.serialize()}), 200
    
@api.route('/private', methods=['POST'])
@jwt_required()
def private():
    current_user = get_jwt_identity()
    return jsonify({"ok" : True, "current_user" : current_user}), 200

# Endpoint para codigo de seguridad
@api.route('/send-code', methods=['POST'])
def send_code():
    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email es requerido'}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    # Generar código de seguridad
    code = f"{random.randint(100000, 999999)}"
    user.reset_code = code
    # user.code_expires = datetime.now(timezone.utc) + timedelta(minutes=10)  # Código válido por 10 minutos

    # Guardar cambios en la base de datos
    db.session.commit()

    # Enviar correo
    msg = Message('Código de seguridad para restablecer tu contraseña en Geek-Bank',
                  recipients=[email])
    msg.body = (
        f"Hola,\n\n"
        f"Hemos recibido una solicitud para restablecer tu contraseña en Geek-Bank.\n\n"
        f"Tu código de seguridad es:\n\n"
        f"🔑 **{code}** 🔑\n\n" 
        f"Por favor, introduce este código en nuestra página web para completar el proceso de recuperación de tu cuenta.\n\n"
        f"Este código es válido por 10 minutos.\n\n"
        f"⚠️ *Nota importante:* Si no solicitaste este código, es posible que alguien haya intentado acceder a tu cuenta. "
        f"Te recomendamos ignorar este mensaje y, si tienes alguna duda, contacta con nuestro equipo de soporte a la brevedad.\n\n"
        f"¡Gracias por confiar en Geek-Bank!\n\n"
        f"Atentamente,\n"
        f"El equipo de Geek-Bank")

    get_mail().send(msg)
    return jsonify({'message': 'Código enviado exitosamente', 'code': code}), 200
    
@api.route('/verify-code', methods=['POST'])
def verify_code():
    data = request.json
    email = data.get('email')
    code = data.get('code')

    if not email or not code:
        return jsonify({'error': 'Email y código son requeridos'}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    if user.reset_code != code:
        return jsonify({'error': 'Código incorrecto'}), 400
    return jsonify({'message': 'Código verificado correctamente'}), 200