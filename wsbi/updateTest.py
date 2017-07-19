from wsbi.models import  *
import datetime


obju = UsuarioBaston(
    id=3,
    nombre="Cacho3",
    apellido="Cacho3",
    dni=33344453,
    mac="10.10.10.13",
    email="cacho3@hotmail.com",
    idTelegram=1234443)

obju.save()

objc = CredencialAmazon(
    id=3,
    keyId="AKIAI4365QI36OO7GCGA",
    secretKey="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")

objc.save()

obj = Configuracion(
    id=3,
    usuarioBaston=UsuarioBaston.objects.get(pk=3),
    credencialAmazon=CredencialAmazon.objects.get(pk=3),
    pasosMin=23,
    pulsoMax=223,
    puldoMin=443).save()

obj = Interesado(
    id=4,
    configuracion=Configuracion.objects.get(pk=3),
    nombre="miguel3",
    apellido="miguel3",
    dni=333333334,
    email="miguel3@hotmail.com",
    idTelegram=1233334)

obj.save()

obj =  AlarmaPersonalizada(
	id = 3,
    texto = "arriba viejo dale dale3",
    pathAudio = "ejemplos/pastiazul.mp3")

obj.save()

obj = Alejamiento(
    id=3,
    configuracion=Configuracion.objects.get(pk=3),
    alarmaPersonalizada=AlarmaPersonalizada.objects.get(pk=3),
    distanciaMax=303,
    origenX=53,
    origenY=53)

obj.save()


obj = Recordatorio(
    id=3,
    alarmaPersonalizada=AlarmaPersonalizada.objects.get(pk=3),
    fecha=datetime.date.today(),
    titulo="Levantate3",
    periodo=3)

obj.save()

objrec = Recordatorio.objects.get(pk=3),

objrec.configuracion.add(Configuracion.objects.get(pk=3))

