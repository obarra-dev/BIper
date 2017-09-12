from wsbi.ParserObject import  ParserObject
import json
import requests
import boto3

c = json.dumps(
    {
        "id": 2,
        "pasosMin": 25,
        "pulsoMax": 225,
        "puldoMin": 444,
        "alejamiento": {  # <-------------------------------------------- Alejamiento
            "id": 2,
            "distanciaMax": 300,
            "origenX": 56,
            "origenY": 57,
            "alarmaPersonalizada": {  # <-------------------------------------------- SACARLO!!!!
                "id": 2,
                "texto": "pasti azul",
                "pathAudio": "ejemplos/pastiazul.mp3"
            }
        },
        "usuarioBaston": {
            "id": 2,
            "nombre": "Cacho",
            "apellido": "Cacho",
            "dni": 33344456,
            "mac": "10.10.10.10",
            "email": "cacho@hotmail.com",
            "idTelegram": 123444
        },
        "credencialAmazon": {
            "id": 2,
            "keyId": "AKIAI4365QI36OO7GCGA",
            "secretKey": "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"
        },
        "interesados": [
            {
                "id": 3,
                "nombre": "miguel",
                "apellido": "miguel",
                "dni": 33333333,
                "email": "miguel@hotmail.com",
                "idTelegram": 123333
            }
        ],
        "recordatorios": [
            {
                "id": 2,
                "horario": "15:30",
                "titulo": "Levantate",
                "periodo": 6,
                "alarmaPersonalizada": {
                    "id": 2,
                    "texto": "Tomar pastilla azul",
                    "pathAudio": "ejemplos/pastiazul.mp3"
                }
            }
        ]
    }
)

config = ParserObject(c)

#response = requests.get('http://localhost:8000/wsbi/config/2')
#config = ParserObject(response.content)

credencialAmazon = ParserObject(json.dumps(config.credencialAmazon))

# print(credencialAmazon.keyId)
# print(credencialAmazon.secretKey)

# alejamiento = ParserObject(json.dumps(config.alejamiento))
# alarmaPersonalizadaAlejamiento = ParserObject(json.dumps(alejamiento.alarmaPersonalizada))
# print(alarmaPersonalizadaAlejamiento.texto)
# print(alarmaPersonalizadaAlejamiento.pathAudio)

zonaSeguridadDistanciaMaxima = ParserObject(json.dumps(config.alejamiento.distanciaMax))
zonaSeguridadLatitud = ParserObject(json.dumps(config.alejamiento.origenX))
zonaSeguridadlongitud = ParserObject(json.dumps(config.alejamiento.origenY))
print("Limite: %s, Latitud: %s, Longitud: %s" % (
zonaSeguridadDistanciaMaxima, zonaSeguridadLatitud, zonaSeguridadlongitud))

for r in config.recordatorios:
    recordar = ParserObject(json.dumps(r))
    alarma = ParserObject(json.dumps(recordar.alarmaPersonalizada))

    print(alarma.id)
    # print(alarma.texto)
    print(alarma.pathAudio)

    horarioActivacionRecordatorio = ParserObject(
        json.dumps(recordar.horario))  # hora:min para activar de ese recordatorio.
    print(horarioActivacionRecordatorio)

    # Let's use Amazon S3
    s3 = boto3.resource('s3', aws_access_key_id=credencialAmazon.keyId,
                        aws_secret_access_key=credencialAmazon.secretKey)

    # muestra todos los elementos de todos los bucket
    # for bucket in s3.buckets.all():
    #	for key in bucket.objects.all():
    #		print(key.key)

    pathDestinoBaston = '/home/pi/Proyectos/baston/archivos/' + alarma.id + '.mp3'
    # descargar un audio
    myBucket = s3.Bucket('biaudios')
    nombreAud = myBucket.Object(alarma.pathAudio)  # nombre del archivo del recordatorio.
    data = nombreAud.get()['Body'].read()
    with open(pathDestinoBaston, 'wb') as f2:
        f2.write(data)


# for inter in config.interesados:
#	h = ParserObject(json.dumps(inter))
#	print(h.id)
#	print(h.nombre)
#	print(h.apellido)



