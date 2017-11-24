from django.db import models


class UsuarioBaston(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.IntegerField(default=0)
    mac = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100,blank=True,null=True)
    idTelegram = models.IntegerField(default=0)

class CredencialAmazon(models.Model):
    keyId = models.CharField(max_length=70)
    secretKey = models.CharField(max_length=70)

class Configuracion(models.Model):
    usuarioBaston = models.ForeignKey(UsuarioBaston)
    credencialAmazon = models.ForeignKey(CredencialAmazon)
    pasosMin = models.IntegerField(default=0)
    pulsoMax = models.IntegerField(default=0)
    pulsoMin = models.IntegerField(default=0)


class Interesado(models.Model):
    configuracion = models.ForeignKey(Configuracion)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.IntegerField(default=0)
    email = models.EmailField(max_length=100)
    idTelegram = models.IntegerField(default=0)

class AlarmaPersonalizada(models.Model):
    texto = models.CharField(max_length=500)
    pathAudio = models.CharField(max_length=100)

class Alejamiento(models.Model):
    configuracion = models.OneToOneField(
        Configuracion,
        on_delete=models.CASCADE
    )
    #alarmaPersonalizada = models.OneToOneField(
     #   AlarmaPersonalizada,
      #  on_delete=models.CASCADE
    #)
    distanciaMax = models.IntegerField(default=100)
    origenX = models.CharField(max_length=50)
    origenY = models.CharField(max_length=50)
    dirreccion = models.CharField(max_length=200, blank=True,null=True)

class Recordatorio(models.Model):
    configuracion = models.ManyToManyField(Configuracion)
    alarmaPersonalizada = models.OneToOneField(
        AlarmaPersonalizada,
        on_delete=models.CASCADE
    )
    hora = models.IntegerField(default=0)
    min = models.IntegerField(default=0)
    fecha = models.CharField(max_length=10, blank=True,null=True)
    titulo = models.CharField(max_length=100)
    repeticion = models.IntegerField(default=0)


class PasosHistorico(models.Model):
    usuarioBaston = models.ForeignKey(UsuarioBaston)
    #fecha = models.DateTimeField(auto_now=False)
    fecha = models.DateTimeField(auto_now_add=True)
    pasosProm = models.IntegerField(default=0)

class PulsosHistorico(models.Model):
    usuarioBaston = models.ForeignKey(UsuarioBaston)
    #fecha = models.DateTimeField(auto_now=False)
    fecha = models.DateTimeField(auto_now_add=True)
    pulsosProm = models.IntegerField(default=0)
    pulsosMax = models.IntegerField(default=0)
    pulsosMin = models.IntegerField(default=0)

class TrayectoriaHistorico(models.Model):
    usuarioBaston = models.ForeignKey(UsuarioBaston)
    #fecha = models.DateTimeField(auto_now=False)
    fecha = models.DateTimeField(auto_now_add=True)
    camino = models.CharField(max_length=1000)