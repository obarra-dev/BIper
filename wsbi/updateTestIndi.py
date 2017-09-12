from wsbi.models import  *
import datetime

obj = PasosHistorico(
    usuarioBaston=UsuarioBaston.objects.get(pk=1),
    fecha=datetime.date.today(),
    pasosProm=3)

obj.save()
