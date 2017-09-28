from wsbi.models import  *
import datetime
"""
obj = PasosHistorico(
    usuarioBaston=UsuarioBaston.objects.get(pk=1),
    fecha=datetime.date.today(),
    pasosProm=3)

obj.save()
"""

#obj = UsuarioBaston.objects.filter(pk=1).update(nombre='Cacho22')
    # At this point obj.val is still 1, but the value in the database
    # was updated to 2. The object's updated value needs to be reloaded
    # from the database.
    #obj.refresh_from_db()


ACCESS_KEY_ID = 'AKIAJFK7RKWAFMDUEIEQ'
ACCESS_SECRET_KEY = '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'
#obj = CredencialAmazon.objects.filter(pk=2).update(keyId=ACCESS_KEY_ID, secretKey=ACCESS_SECRET_KEY)

#obj = Recordatorio.objects.filter(pk=2).update(hora=13,min=00)

"""
obj = Recordatorio.objects.filter(configuracion=Configuracion.objects.get(pk=2))
for e in obj:
    alar = AlarmaPersonalizada.objects.filter(id=e.alarmaPersonalizada.id)
    alar.update(texto='testmgmgmgmg', pathAudio='postaEjemplos/pastiazul.mp3')
    print(e.hora)

obj.update(hora=15,min=00)
"""


"""
al = AlarmaPersonalizada(
            texto="arriba viejo NUEVO",
            pathAudio="ejemplosNUEVO/pastiazul.mp3")
al.save()

objrec = Recordatorio(
    alarmaPersonalizada=al,
    hora=23,
    min=23,
    repeticion=3,
    titulo="Levantategg")

objrec.save()

objrec.configuracion.add(Configuracion.objects.get(pk=2))
"""



"""
AlarmaPersonalizada.objects.get(pk=3)

obj = Recordatorio.objects.get(configuracion=Configuracion.objects.get(pk=2))
print(obj.hora)


obj = AlarmaPersonalizada.objects.filter(id=obj.alarmaPersonalizada.id)
obj.update(texto='testmgmgmgmg',pathAudio='postaEjemplos/pastiazul.mp3')

"""


obj = Recordatorio.objects.filter(configuracion=Configuracion.objects.get(pk=2))
user = UsuarioBaston.objects.get(id=2)
con = Configuracion.objects.get(usuarioBaston = user)
print(con.pulsoMax)