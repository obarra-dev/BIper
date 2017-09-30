from wsbi.models import  UsuarioBaston, Configuracion, Interesado, AlarmaPersonalizada, Alejamiento, Recordatorio, CredencialAmazon, PasosHistorico, TrayectoriaHistorico
from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import PrimaryKeyRelatedField

class UsuarioBastonSerializer(ModelSerializer):
    class Meta:
        model = UsuarioBaston
        fields = ('id', 'nombre', 'apellido', 'dni','mac', 'email','password', 'idTelegram')

class CredencialAmazonSerializer(ModelSerializer):
    class Meta:
        model = CredencialAmazon
        fields = ('id', 'keyId', 'secretKey')

class InteresadoSerializer(ModelSerializer):
    class Meta:
        model = Interesado
        fields = ('id', 'nombre', 'apellido', 'dni', 'email', 'idTelegram')

class AlarmaPersonalizadaSerializer(ModelSerializer):
    class Meta:
        model = AlarmaPersonalizada
        fields = ('id', 'texto', 'pathAudio')

class AlejamientoSerializer(ModelSerializer):
    alarmaPersonalizada = AlarmaPersonalizadaSerializer(read_only=True)
    class Meta:
        model = Alejamiento
        fields = ('id', 'distanciaMax', 'origenX', 'origenY', 'alarmaPersonalizada', 'dirreccion')

class RecordatorioSerializer(ModelSerializer):
    alarmaPersonalizada = AlarmaPersonalizadaSerializer(read_only=True)
    class Meta:
        model = Recordatorio
        fields = ('id', 'hora', 'min', 'fecha','titulo', 'repeticion', 'alarmaPersonalizada')

class ConfiguracionSerializer(ModelSerializer):
    alejamiento = AlejamientoSerializer(read_only=True)
    usuarioBaston = UsuarioBastonSerializer(read_only=True)
    credencialAmazon = CredencialAmazonSerializer(read_only=True)
    interesados = InteresadoSerializer(many=True, read_only=True, source='interesado_set')
    recordatorios = RecordatorioSerializer(many=True, read_only=True, source='recordatorio_set')
    class Meta:
        model = Configuracion
        fields = ('id', 'pasosMin', 'pulsoMax', 'pulsoMin', 'alejamiento','usuarioBaston','credencialAmazon','interesados', 'recordatorios')



class PasosHistoricoSerializer(ModelSerializer):
    class Meta:
        model = PasosHistorico
        fields = ('id', 'fecha', 'pasosProm')

class TrayectoriaHistoricoSerializer(ModelSerializer):
    class Meta:
        model = TrayectoriaHistorico
        fields = ('id', 'fecha', 'camino')