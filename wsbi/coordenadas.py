#from googlemaps import GoogleMaps

#gmaps = GoogleMaps(API_KEY)
#lat, lng = gmaps.address_to_latlng("Bulnes 1718")
#print (lat, lng)


from googlemaps import GoogleMaps
gmaps = GoogleMaps(API_KEY)
address = '10th St. & Constitution Ave. NW, Washington, D.C. 20560'
lat, lng = gmaps.address_to_latlng(address)
print (lat, lng)
