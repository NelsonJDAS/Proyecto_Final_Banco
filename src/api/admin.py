  
import os
from flask_admin import Admin
from .models import db, User, Cliente, ConfiguracionUsuario, Cuenta, Transaccion, Notificacion, TarjetaCoordenadas
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    class Adminview(ModelView):
        column_display_pk = True

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(Adminview(User, db.session))
    admin.add_view(ModelView(Cliente, db.session))
    admin.add_view(ModelView(ConfiguracionUsuario, db.session))
    admin.add_view(ModelView(Cuenta, db.session))
    admin.add_view(ModelView(Transaccion, db.session))
    admin.add_view(ModelView(Notificacion, db.session))
    admin.add_view(ModelView(TarjetaCoordenadas, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))