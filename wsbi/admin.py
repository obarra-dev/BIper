from django.contrib import admin
from .models import UsuarioBaston, PasosHistorico, PulsosHistorico, TrayectoriaHistorico

admin.site.register(UsuarioBaston)
admin.site.register(PasosHistorico)
admin.site.register(PulsosHistorico)
admin.site.register(TrayectoriaHistorico)


# Register your models here.
