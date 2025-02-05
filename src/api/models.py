from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum
from datetime import datetime, timezone

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    rol = db.Column(Enum('usuario', 'administrador', name='rol_enum'), default='usuario', nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)
    reset_code = db.Column(db.String(6), nullable=True)
    coordinates_code = db.Column(db.String(6), nullable=True)
    code_expires = db.Column(db.DateTime, nullable=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    cliente = db.relationship("Cliente", back_populates="usuarios")
    configuracion = db.relationship("ConfiguracionUsuario", uselist=False, back_populates="usuario")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "rol": self.rol
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

    # Relación con User
    usuario = db.relationship("User", back_populates="configuracion")

    def __repr__(self):
        return f'<ConfiguracionUsuario {self.id_usuario}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_usuario": self.id_usuario,
            "modo_oscuro": self.modo_oscuro,
            "ocultar_saldo": self.ocultar_saldo,
            "idioma": self.idioma,
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
    
class Categoria(db.Model):
    __tablename__ = 'categoria'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), unique=True, nullable=False)

    # Relación inversa (opcional) para poder acceder a todos los productos de esta categoría
    productos = db.relationship("Producto", back_populates="categoria")

    def __repr__(self):
        return f"<Categoria {self.nombre}>"

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre
        }


class Producto(db.Model):
    __tablename__ = 'producto'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    price = db.Column(db.String(50), nullable=True)
    image_url = db.Column(db.String(255), nullable=True)
    rating = db.Column(db.String(50), nullable=True)
    review_count = db.Column(db.String(50), nullable=True)
    fecha_creacion = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    # Foreign Key a la tabla categoria
    categoria_id = db.Column(db.Integer, db.ForeignKey('categoria.id'), nullable=True)

    # Relación con la tabla Categoria
    categoria = db.relationship("Categoria", back_populates="productos")

    def __repr__(self):
        return f"<Producto {self.title} - CategoriaID: {self.categoria_id}>"

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "image_url": self.image_url,
            "rating": self.rating,
            "review_count": self.review_count,
            "fecha_creacion": self.fecha_creacion.isoformat() if self.fecha_creacion else None,
            "categoria": self.categoria.nombre if self.categoria else None
        }