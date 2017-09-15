import requests, json
headers = {'Content-type': 'application/json; charset=utf8'}
#wsbi_url = "http://localhost:8000/wsbi/set_pasos_frecuencias/"
wsbi_url = "http://bidesa.herokuapp.com/wsbi/set_pasos_frecuencias/"

a = 44
b = 255
c = 755
data = json.dumps(
    {
        "id": 1,
        "fecha": "2015-05-05T00:36:17.520156Z",
        "pasosProm": a,
        "pulsosMax": b,
        "pulsosMin": c
    }
    )
r = requests.post(wsbi_url, data, headers=headers)
print(r.content)

