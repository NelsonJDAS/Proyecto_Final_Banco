from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, it's a security breach
        }
    
class Cliente(db.Model):
    __tablename__ = 'cliente'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))  # Asumo que será en texto plano o hasheado
    telefono = db.Column(db.String(15))
    direccion = db.Column(db.String(200))
    fecha_creacion = db.Column(db.DateTime, default=datetime.utcnow)
    fecha_nacimiento = db.Column(db.Date)
    tipo_documento = db.Column(db.String(20))
    numero_documento = db.Column(db.String(50), unique=True)

    cuentas = db.relationship("Cuenta", back_populates="cliente")
    asesor = db.relationship("Asesor", back_populates="cliente", uselist=False)
    configuracion = db.relationship("ConfiguracionUsuario", back_populates="cliente", uselist=False)

    def __repr__(self):
        return f'<User {self.email}>'


class ConfiguracionUsuario(db.Model):
    __tablename__ = 'configuracion_usuario'

    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    modo_oscuro = db.Column(db.Boolean, default=False)
    idioma = db.Column(db.String(5))
    componentesSave = db.Column(db.String(50))

    cliente = db.relationship("Cliente", back_populates="configuracion")


class Cuenta(db.Model):
    __tablename__ = 'cuenta'

    id = db.Column(db.Integer, primary_key=True)
    numero_cuenta = db.Column(db.String(20), unique=True)
    tipo_cuenta = db.Column(db.String(50))
    saldo = db.Column(db.Float)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    estado = db.Column(db.Integer)

    cliente = db.relationship("Cliente", back_populates="cuentas")
    transacciones = db.relationship("Transaccion", back_populates="cuenta")
    seguro = db.relationship("Seguro", back_populates="cuenta")


class Transaccion(db.Model):
    __tablename__ = 'transaccion'

    id = db.Column(db.Integer, primary_key=True)
    cuenta_id = db.Column(db.Integer, db.ForeignKey('cuenta.id'))
    tipo = db.Column(db.String(50))
    monto = db.Column(db.Float)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)
    descripcion = db.Column(db.String(200))

    cuenta = db.relationship("Cuenta", back_populates="transacciones")
    tipo_transaccion = db.relationship("TipoTransaccion", back_populates="transacciones")


class TipoTransaccion(db.Model):
    __tablename__ = 'tipo_transaccion'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    descripcion = db.Column(db.String(200))

    transacciones = db.relationship("Transaccion", back_populates="tipo_transaccion")


class Asesor(db.Model):
    __tablename__ = 'asesor'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    puesto = db.Column(db.String(50))
    fecha_contratacion = db.Column(db.DateTime, default=datetime.utcnow)
    activo = db.Column(db.Boolean, default=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))

    cliente = db.relationship("Cliente", back_populates="asesor")


class Seguro(db.Model):
    __tablename__ = 'seguro'

    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.Integer)

    cuenta = db.relationship("Cuenta", back_populates="seguro")