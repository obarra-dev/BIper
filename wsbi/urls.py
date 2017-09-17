from django.conf.urls import url
from wsbi import views

urlpatterns = [
    url(r'^wsbi/set_pasos_frecuencias/$', views.set_pasos_frecuencias),
    url(r'^wsbi/get_pasos_hitoricos$', views.get_pasos_hitoricos),
    url(r'^wsbi/get_recorridos_hitoricos', views.get_recorridos_hitoricos),
    url(r'^wsbi/set_recorrido/$', views.set_recorrido),
    url(r'^wsbi/config$', views.info_config),
	url(r'^wsbi/testj/$', views.testj),
    url(r'^wsbi/config/(?P<pk>[0-9]+)/$', views.info_my_config),
    url(r'^wsbi/setconfig/(?P<pk>[0-9]+)/$', views.set_config),
    url(r'^wsbi/inicio$', views.inicio),
    url(r'^wsbi/configuracion$', views.configuracion),
    url(r'^wsbi/estadistica$', views.estadistica),
    url(r'^wsbi/recorrido$', views.recorrido),
    url(r'^wsbi/get_pasos_semanal$', views.get_pasos_semanal),
    url(r'^wsbi/get_recorrido_semanal$', views.get_recorrido_semanal),

]

