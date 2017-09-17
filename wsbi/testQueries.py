from datetime import  timedelta, date
import datetime
from wsbi.models import PasosHistorico, TrayectoriaHistorico
from wsbi.serializers import TrayectoriaHistoricoSerializer

#day = '12/Oct/2017'
#dt = datetime.strptime(day, '%d/%b/%Y')
dt = datetime.date.today()
start_date = dt - timedelta(days=dt.weekday())
end_date = start_date + timedelta(days=7)
print(start_date)
print(end_date)

start_date = datetime.date(2017, 9, 9)
end_date = datetime.date(2017, 9, 18)
print(start_date)
print(end_date)
c = PasosHistorico.objects.filter(fecha__range=(start_date, end_date))
print(c)

print(datetime.datetime.today() )
c = TrayectoriaHistorico.objects.filter(fecha__date=datetime.date.today())
c = TrayectoriaHistorico.objects.filter(fecha__year=datetime.datetime.today().year,
                                        fecha__month=datetime.datetime.today().month,
                                        fecha__day=datetime.datetime.today().day+1)
#c = TrayectoriaHistorico.objects.all()

serializer = TrayectoriaHistoricoSerializer(c, many=True)
print(serializer.data)