from wsbi.models import  *
import datetime

objrec = Recordatorio.objects.get(pk=4)

objrec.configuracion.add(Configuracion.objects.get(pk=4))

