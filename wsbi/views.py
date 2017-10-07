from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from wsbi.models import  *
from wsbi.serializers import  *
import datetime
from rest_framework.decorators import api_view
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from wsbi.ParserObject import  ParserObject
import json
from datetime import  timedelta
import boto3


ACCESS_KEY_ID = 'AKIAJFK7RKWAFMDUEIEQ'
ACCESS_SECRET_KEY = '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'

BUCKET_NAME = 'biaudios'

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def inicio(request):
    return render(request,'inicio.html')

def configuracion(request):
    return render(request, 'configuracion.html')

def loginUser(request):
    if request.method == 'POST':
        usuariosBas = UsuarioBaston.objects.all()
        userw = request.POST.get('inputEmail', '')
        passw = request.POST.get('inputPassword', '')
        print(passw)
        print(userw)
        for user in usuariosBas:
            if user.email == userw and user.password == passw:
                con = Configuracion.objects.get(usuarioBaston=user)
                print(con.id)
                request.session['id_config'] = con.id
                return render(request, 'configuracion.html')
    return render(request, 'inicio.html')

@api_view(['GET'])
def get_datos_sesion(request):
    if request.method == 'GET':
        idc = request.session['id_config']
        return JSONResponse({
            "id": idc
        })


def set_datosActividad(request):
    if request.method == 'POST':
        print(request.session['id_config'])
        idConfig = request.POST.get('configAct-name', '')
        pulsosMin = request.POST.get('pulsoMinname', '')
        pulsoMax = request.POST.get('pulsoMaxname', '')
        pasosMin = request.POST.get('pasosMinname', '')
        print(idConfig)
        print(pulsosMin)
        print(pulsoMax)
        print(pasosMin)

        obj = Configuracion.objects.filter(pk=int(idConfig)).update(pasosMin=int(pulsosMin), pulsoMax=int(pulsoMax), pulsoMin=int(pasosMin))

    return render(request, 'configuracion.html')
"""
@api_view(['POST'])
@csrf_exempt
def set_datosActividad(request):
    if request.method == 'POST':
        c = json.dumps(request.data)
        pasosFrecs = ParserObject(c)
        obj = Configuracion.objects.filter(pk=int(pasosFrecs.idConfig)).update(pasosMin=int(pasosFrecs.pasosProm), pulsoMax=int(pasosFrecs.pulsosMax),
                                                                    pulsoMin=int(pasosFrecs.pulsosMin))
        return JSONResponse({
            "res": "OK"
        })
"""

def subir_recordatorio(request):
    if request.method == 'POST':
        idConfig = request.POST.get('configRec-name', '')
        titulo = request.POST.get('titulo-name', '')
        horamin = request.POST.get('horamin-name', '')
        fecha = request.POST.get('fecha-name', '')

        #repetir = request.POST.get('repetir-name', '')
        #recordar = request.POST.get('recordar-name', '')
        f = request.FILES['docfile']
        print(f.name)
        path = 'audios/' + str(idConfig) + '/' +f.name;
        handle_uploaded_file_amazon(f, path)

        horaminArray = horamin.split(':', 1)

        hora = int(horaminArray[0])
        min = int(horaminArray[1][:2])

        al = AlarmaPersonalizada(pathAudio=path)
        al.save()

        objrec = Recordatorio(
            alarmaPersonalizada=al,
            fecha=fecha,
            hora=hora,
            min=min,
            titulo=titulo)

        objrec.save()

        objrec.configuracion.add(Configuracion.objects.get(pk=idConfig))

        """
        files = request.FILES.getlist('file-name')
        for f in files:
            handle_uploaded_file(f)
        """


    return render(request, 'configuracion.html')

def handle_uploaded_file_amazon(f, path):
    s3 = boto3.resource('s3', aws_access_key_id=ACCESS_KEY_ID, aws_secret_access_key=ACCESS_SECRET_KEY)
    # muestra todos los elementos de todos los bucket
    myBucket = s3.Bucket('biaudios')
    myBucket.Object(path).put(Body=f.read())

def handle_uploaded_file_data(f):
    with open('archivoddxx.ogg', 'wb') as destination:
        destination.write(f.read())


def handle_uploaded_file(f):
    with open('archivodd.ogg', 'wb') as destination:
        #destination.write(f)
        for chunk in f.chunks():
            print("omarkap")
            destination.write(chunk)




def estadistica(request):
    return render(request,'estadistica.html')

def recorrido(request):
    return render(request,'recorrido.html')

def zonaseguridad(request):
    return render(request,'zonaseguridad.html')

def set_zonaseguridad(request):
    if request.method == 'POST':
        idConfig = request.session['id_config']
        address = request.POST.get('address-name', '')
        latitude = request.POST.get('latitude-name', '')
        longitude = request.POST.get('longitude-name', '')
        distance = request.POST.get('distance-name', '')

        obj = Alejamiento(
            id=idConfig,
            configuracion=Configuracion.objects.get(pk=idConfig),
            distanciaMax=distance,
            origenX=latitude,
            origenY=longitude,
            dirreccion = address)
        obj.save()

    return render(request, 'zonaseguridad.html')

@api_view(['GET'])
def get_zonaseguridad(request):
    if request.method == 'GET':
        idConfig = request.session['id_config']
        con = Configuracion.objects.get(pk=idConfig)
        obj = Alejamiento.objects.filter(configuracion=con)
        serializer = AlejamientoSerializer(obj, many=True)
        return JSONResponse(serializer.data)


@api_view(['GET'])
def get_pasos_hitoricos(request):
    if request.method == 'GET':
        snippets = PasosHistorico.objects.all()
        serializer = PasosHistoricoSerializer(snippets, many=True)
        return JSONResponse(serializer.data)

@api_view(['GET'])
def get_recorridos_hitoricos(request):
    if request.method == 'GET':
        snippets = TrayectoriaHistorico.objects.all()
        serializer = TrayectoriaHistoricoSerializer(snippets, many=True)
        return JSONResponse(serializer.data)


@api_view(['GET'])
def get_pasos_semanal(request):
    if request.method == 'GET':
        dt = datetime.date.today()
        start_date = dt - timedelta(days=dt.weekday())
        end_date = start_date + timedelta(days=7)
        pasos_semanales = PasosHistorico.objects.filter(fecha__range=(start_date, end_date))
        print(pasos_semanales)
        serializer = PasosHistoricoSerializer(pasos_semanales, many=True)
        return JSONResponse(serializer.data)

@api_view(['GET'])
def get_recorrido_semanal(request):
    if request.method == 'GET':
        c = TrayectoriaHistorico.objects.filter(fecha__year=datetime.datetime.today().year,
                                                fecha__month=datetime.datetime.today().month,
                                                fecha__day=datetime.datetime.today().day)
        serializer = TrayectoriaHistoricoSerializer(c, many=True)
        return JSONResponse(serializer.data)

@api_view(['GET'])
def get_recorrido_por_fecha(request, fecha):
    if request.method == 'GET':
        dia = int(fecha[:2])
        print(dia)
        mes = int(fecha[2:4])
        print(mes)
        anio = int(fecha[4:])
        print(anio)
        c = TrayectoriaHistorico.objects.filter(fecha__year=anio,
                                                fecha__month=mes,
                                                fecha__day=dia)
        serializer = TrayectoriaHistoricoSerializer(c, many=True)
        return JSONResponse(serializer.data)

@api_view(['POST'])
def set_pasos_frecuencias(request):
    if request.method == 'POST':
        c = json.dumps(request.data)
        pasosFrecs = ParserObject(c)
        """
        serializer = PasosHistoricoSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.data['apellido'])
            print(serializer.data.pop('nombre'))
            print(serializer.data.get('dni'))
            #serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        """
        obj = PasosHistorico(
            usuarioBaston=UsuarioBaston.objects.get(pk=pasosFrecs.id),
            fecha=pasosFrecs.fecha,
            pasosProm=pasosFrecs.pasosProm)
        obj.save()

        obj = PulsosHistorico(
            usuarioBaston=UsuarioBaston.objects.get(pk=pasosFrecs.id),
            fecha=pasosFrecs.fecha,
            pulsosProm = 0,
            pulsosMax = pasosFrecs.pulsosMax,
            pulsosMin = pasosFrecs.pulsosMin)
        obj.save()

        return JSONResponse({
            "res": "OK"
        })

@api_view(['POST'])
def set_recorrido(request):
    if request.method == 'POST':
        c = json.dumps(request.data)
        recorrido = ParserObject(c)
        print(recorrido.camino)
        obj = TrayectoriaHistorico(
            usuarioBaston=UsuarioBaston.objects.get(pk=recorrido.id),
            fecha=recorrido.fecha,
            camino=recorrido.camino)
        obj.save()

        return JSONResponse({
            "res": "OK"
        })



@csrf_exempt
def info_config(request):
    if request.method == 'GET':
        config = Configuracion.objects.all()
        seralizer = ConfiguracionSerializer(config, many="True")

        return JSONResponse(seralizer.data)

@csrf_exempt
def info_my_config(request, pk):
    if request.method == 'GET':
        usuarioBaston = UsuarioBaston.objects.get(pk=pk)
        config = Configuracion.objects.get(usuarioBaston=usuarioBaston.pk)
        seralizer = ConfiguracionSerializer(config)

        return JSONResponse(seralizer.data)

@csrf_exempt
def set_config(request, pk):
    if request.method == 'GET':
        obju = UsuarioBaston(
            id=pk,
            nombre="Cacho" + pk,
            apellido="Cacho" + pk,
            dni=33344453,
            mac="10.10.10.1" + pk,
            email="cacho3@hotmail.com",
            idTelegram=1234443)

        obju.save()

        objc = CredencialAmazon(
            id=pk,
            keyId="AKIAI4365QI36OO7GCGA",
            secretKey="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")

        objc.save()

        obj = Configuracion(
            id=pk,
            usuarioBaston=UsuarioBaston.objects.get(pk=pk),
            credencialAmazon=CredencialAmazon.objects.get(pk=pk),
            pasosMin=23,
            pulsoMax=223,
            pulsoMin=443).save()

        obj = Interesado(
            id=1 + int(pk),
            configuracion=Configuracion.objects.get(pk=pk),
            nombre="miguel" + pk,
            apellido="miguel" + pk,
            dni=333333334,
            email="miguel3@hotmail.com",
            idTelegram=1233334)

        obj.save()

        obj = AlarmaPersonalizada(
            id=pk,
            texto="arriba viejo dale dale" + pk,
            pathAudio="ejemplos/pastiazul.mp3")

        obj.save()

        obj = Alejamiento(
            id=pk,
            configuracion=Configuracion.objects.get(pk=pk),
            alarmaPersonalizada=AlarmaPersonalizada.objects.get(pk=pk),
            distanciaMax=300 + int(pk),
            origenX="-23,54565454645" + pk,
            origenY="-23,54565454645" + pk)

        obj.save()

        obj = Recordatorio(
            id=pk,
            alarmaPersonalizada=AlarmaPersonalizada.objects.get(pk=pk),
            hora=int(pk),
            min=int(pk),
            repeticion=int(pk),
            titulo="Levantate"+pk)

        obj.save()

        objrec = Recordatorio.objects.get(pk=pk)

        objrec.configuracion.add(Configuracion.objects.get(pk=pk))

        return JSONResponse({
            "res": "OK"
        })


@csrf_exempt
def testj(request):
    # Let's use Amazon S3
    print(ACCESS_KEY_ID)
    print(ACCESS_SECRET_KEY)
    s3 = boto3.resource('s3', aws_access_key_id=ACCESS_KEY_ID, aws_secret_access_key=ACCESS_SECRET_KEY)
    # muestra todos los elementos de todos los bucket
    for bucket in s3.buckets.all():
        for key in bucket.objects.all():
            print(key.key)
    myBucket = s3.Bucket('biaudios')
    with open('archivodd.ogg', 'rb') as data:
        myBucket.Object('ejemplos/archivoddDJ.ogg').put(Body=data)
    if request.method == 'GET':
        return JSONResponse({
            "id": 2,
            "nombre": "omar",
            "apellido": "farra",
            "dni": 5677
        })
