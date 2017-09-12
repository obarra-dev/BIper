import requests, json
headers = {'Content-type': 'application/json; charset=utf8'}
wsbi_url = "http://localhost:8000/wsbi/set_pasos_frecuencias/"
data = json.dumps(
    {
        "id": 1,
        "fecha": "2017-09-08T00:36:17.520156Z",
        "pasosProm": 68,
        "pulsosMax": 308,
        "pulsosMin": 606
    }
    )
r = requests.post(wsbi_url, data, headers=headers)
print(r)

