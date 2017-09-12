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


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def inicio(request):
    return render(request,'inicio.html')

def configuracion(request):
    return render(request,'configuracion.html')

def estadistica(request):
    return render(request,'estadistica.html')

def recorrido(request):
    return render(request,'recorrido.html')


@api_view(['GET'])
def get_pasos_hitoricos(request):
    if request.method == 'GET':
        snippets = PasosHistorico.objects.all()
        serializer = PasosHistoricoSerializer(snippets, many=True)
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
    if request.method == 'GET':
        return JSONResponse({
            "id": 2,
            "nombre": "omar",
            "apellido": "farra",
            "dni": 5677
        })
