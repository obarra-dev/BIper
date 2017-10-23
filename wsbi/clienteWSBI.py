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
	"alejamiento": {
		"id": 2,
		"distanciaMax": 300,
		"origenX": 56,
		"origenY": 57,
		"alarmaPersonalizada": {
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
			"fecha": "2017-07-12T00:00:00Z",
			"titulo": "Levantate",
			"periodo": 6,
			"alarmaPersonalizada": {
				"id": 2,
				"texto": "pasti azul",
				"pathAudio": "ejemplos/pastiazul.mp3"
			}
		}
	]
}
)

#config = ParserObject(c)



response = requests.get('https://bidesa.herokuapp.com/wsbi/config/2')
print(response.content)
config = ParserObject(response.content)

credencialAmazon = ParserObject(json.dumps(config.credencialAmazon))

print(credencialAmazon.keyId)
print(credencialAmazon.secretKey)


alejamiento = ParserObject(json.dumps(config.alejamiento))

print(alejamiento.distanciaMax)



for reco in config.recordatorios:
    rec = ParserObject(json.dumps(reco))
    alarma = ParserObject(json.dumps(rec.alarmaPersonalizada))
    print(alarma.id)
    print(alarma.texto)
    print(alarma.pathAudio)


    path = alarma.pathAudio.split('/')
    ultimo = len(path)-1
    pathDestinoRecordatorio = '/home/pi/Proyectos/temporales/recordatorios/' + str(alarma.id) + path[ultimo]
    #pathDestinoRecordatorio = '' + str(alarma.id) + path[ultimo]
    print(pathDestinoRecordatorio)
    s3 = boto3.resource('s3', aws_access_key_id=credencialAmazon.keyId,
						aws_secret_access_key=credencialAmazon.secretKey)
    # descargar un audio
    myBucket = s3.Bucket('biaudios')
    nombreAud = myBucket.Object(alarma.pathAudio)  # nombre del archivo del recordatorio.
    data = nombreAud.get()['Body'].read()
    with open(pathDestinoRecordatorio, 'wb') as f2:
        f2.write(data)












