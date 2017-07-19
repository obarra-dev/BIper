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

config = ParserObject(c)



#response = requests.get('http://localhost:8000/wsbi/config/2')
#config = ParserObject(response.content)

credencialAmazon = ParserObject(json.dumps(config.credencialAmazon))

print(credencialAmazon.keyId)
print(credencialAmazon.secretKey)


alejamiento = ParserObject(json.dumps(config.alejamiento))

print(alejamiento.distanciaMax)

alarmaPersonalizadaAlejamiento = ParserObject(json.dumps(alejamiento.alarmaPersonalizada))
print(alarmaPersonalizadaAlejamiento.texto)
print(alarmaPersonalizadaAlejamiento.pathAudio)


for reco in config.recordatorios:
    rec = ParserObject(json.dumps(reco))
    ala = ParserObject(json.dumps(rec.alarmaPersonalizada))



print(ala.id)
print(ala.texto)
print(ala.pathAudio)



