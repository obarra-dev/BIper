from django.conf.urls import url
from wsbi import views

urlpatterns = [

    url(r'^wsbi/config$', views.info_config),
	url(r'^wsbi/testj/$', views.testj),
    url(r'^wsbi/config/(?P<pk>[0-9]+)/$', views.info_my_config),
    url(r'^wsbi/setconfig/(?P<pk>[0-9]+)/$', views.set_config),
    url(r'^wsbi/inicio$', views.inicio),
    url(r'^wsbi/configuracion$', views.configuracion),
    url(r'^wsbi/estadistica$', views.estadistica),
    url(r'^wsbi/recorrido$', views.recorrido),

]

