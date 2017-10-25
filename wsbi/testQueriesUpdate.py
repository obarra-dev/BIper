from wsbi.models import *

pulsosHistoricos = PulsosHistorico.objects.all()
for p in pulsosHistoricos:

    if p.pulsosMax < p.pulsosMin:
        print(p.pulsosMax)
        print(p.pulsosMin)
        obj = PulsosHistorico.objects.filter(pk=p.id).update(pulsosMin=int(p.pulsosMax), pulsosMax=p.pulsosMin)

