from django.contrib import admin
from .models import *

admin.site.register(UsuarioBaston)
admin.site.register(PasosHistorico)
admin.site.register(PulsosHistorico)
admin.site.register(TrayectoriaHistorico)
admin.site.register(AlarmaPersonalizada)
admin.site.register(Configuracion)
admin.site.register(Recordatorio)
admin.site.register(CredencialAmazon)
admin.site.register(Alejamiento)

# Register your models here.
