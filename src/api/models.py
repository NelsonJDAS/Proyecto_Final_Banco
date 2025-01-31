from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum
from datetime import datetime, timezone

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)
    reset_code = db.Column(db.String(6), nullable=True)
    coordinates_code = db.Column(db.String(6), nullable=True)
    code_expires = db.Column(db.DateTime, nullable=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    cliente = db.relationship("Cliente", back_populates="usuarios")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
        }

class Cliente(db.Model):
    __tablename__ = 'cliente'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    apellidos = db.Column(db.String(100))
    telefono = db.Column(db.String(30))
    direccion = db.Column(db.String(200))
    fecha_creacion = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    fecha_nacimiento = db.Column(db.Date)
    tipo_documento = db.Column(db.String(50))
    numero_documento = db.Column(db.String(50), unique=True)
    # Eliminamos nombre y email de aquí, ya que ahora están en User
    cuentas = db.relationship("Cuenta", back_populates="cliente")
    # configuracion = db.relationship("ConfiguracionUsuario", back_populates="cliente", uselist=False)
    usuarios = db.relationship("User", back_populates="cliente")
    notificaciones = db.relationship("Notificacion", back_populates="cliente")

    def __repr__(self):
        return f'<Cliente {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "telefono": self.telefono,
            "direccion": self.direccion,
            "tipo_documento": self.tipo_documento,
            "numero_documento": self.numero_documento,
            "fecha_nacimiento": self.fecha_nacimiento,
            "fecha_creacion": self.fecha_creacion,
        }


class ConfiguracionUsuario(db.Model):
    __tablename__ = 'configuracion_usuario'

    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('user.id'))  # Referencia a User.id
    modo_oscuro = db.Column(db.Boolean, default=False)
    ocultar_saldo = db.Column(db.Boolean, default=False)  # Nuevo campo
    idioma = db.Column(db.String(5))
    componentesSave = db.Column(db.String(50))

    # Relación con User
    usuario = db.relationship("User", backref="configuracion")

    def __repr__(self):
        return f'<ConfiguracionUsuario User ID: {self.id_usuario}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_usuario": self.id_usuario,
            "modo_oscuro": self.modo_oscuro,
            "ocultar_saldo": self.ocultar_saldo,
            "idioma": self.idioma,
            "componentesSave": self.componentesSave,
        }


class Cuenta(db.Model):
    __tablename__ = 'cuenta'

    id = db.Column(db.Integer, primary_key=True)
    numero_cuenta = db.Column(db.String(20), unique=True)
    numero_tarjeta = db.Column(db.String(20), unique=True)
    cvv = db.Column(db.String(3), unique=True)
    caducidad = db.Column(db.String(40))
    tipo_cuenta = db.Column(db.String(50))
    saldo = db.Column(db.Float)
    saldo_retenido = db.Column(db.Float)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    estado = db.Column(db.Integer)
    cliente = db.relationship("Cliente", back_populates="cuentas")
    transacciones = db.relationship("Transaccion", back_populates="cuenta")
    tarjetas_coordenadas = db.relationship("TarjetaCoordenadas", back_populates="cuenta")

    def __repr__(self):
        return f'<Cuenta {self.numero_cuenta}, Tipo: {self.tipo_cuenta}, Saldo: {self.saldo}>'

    def serialize(self):
        return {
            "id": self.id,
            "numero_cuenta": self.numero_cuenta,
            "tarjeta_coordenadas": self.tarjeta_coordenadas,
            "numero_tarjeta": self.numero_tarjeta,
            "cvv": self.cvv,
            "caducidad": self.caducidad,
            "tipo_cuenta": self.tipo_cuenta,
            "saldo": self.saldo,
            "saldo_retenido": self.saldo_retenido,
            "estado": self.estado,
            "cliente_id": self.cliente_id,
        }
    
class TarjetaCoordenadas(db.Model):
    __tablename__ = 'tarjeta_coordenadas'

    id = db.Column(db.Integer, primary_key=True)
    cuenta_id = db.Column(db.Integer, db.ForeignKey('cuenta.id'), nullable=False)
    posicion = db.Column(db.String(2), nullable=False)  # Ej: "A1", "B3", etc.
    valor = db.Column(db.String(4), nullable=False)     # 4 dígitos (ej: "1234")

    # Relación con Cuenta
    cuenta = db.relationship("Cuenta", back_populates="tarjetas_coordenadas")

    def __repr__(self):
        return f'<TarjetaCoordenadas {self.posicion}: {self.valor}>'

    def serialize(self):
        return {
            "posicion": self.posicion,
            "valor": self.valor  # RECORDATORIO DE CIFRADO
        }


class Transaccion(db.Model):
    __tablename__ = 'transaccion'

    id = db.Column(db.Integer, primary_key=True)
    cuenta_id = db.Column(db.Integer, db.ForeignKey('cuenta.id'))
    tipo = db.Column(Enum('depósito', 'retiro', 'transferencia', name='tipo_transaccion'), nullable=False)
    monto = db.Column(db.Float)
    fecha = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    descripcion = db.Column(db.String(200))
    saldo_anterior = db.Column(db.Float)  # Saldo antes de la transacción
    saldo_posterior = db.Column(db.Float)  # Saldo después de la transacción
    cuenta = db.relationship("Cuenta", back_populates="transacciones")

    def __repr__(self):
        return f'<Transaccion {self.tipo}, Monto: {self.monto}, Fecha: {self.fecha}>'

    def serialize(self):
        return {
            "id": self.id,
            "cuenta_id": self.cuenta_id,
            "tipo": self.tipo,
            "monto": self.monto,
            "fecha": self.fecha,
            "descripcion": self.descripcion,
            "saldo_anterior": self.saldo_anterior,
            "saldo_posterior": self.saldo_posterior,
        }


class Notificacion(db.Model):
    __tablename__ = 'notificacion'

    id = db.Column(db.Integer, primary_key=True)
    mensaje = db.Column(db.String(255), nullable=False)
    leida = db.Column(db.Boolean, default=False)
    fecha_creacion = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    cliente = db.relationship("Cliente", back_populates="notificaciones")

    def __repr__(self):
        return f'<Notificacion {self.mensaje}>'

    def serialize(self):
        return {
            "id": self.id,
            "mensaje": self.mensaje,
            "leida": self.leida,
            "fecha_creacion": self.fecha_creacion,
            "cliente_id": self.cliente_id
        }
    