"""marcilla_store URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from oscar.app import application
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import RedirectView

url_fe = 'http://website-marcilla.rhcloud.com/'

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', RedirectView.as_view(url='catalogue/')),

    url(r'^inicio$', RedirectView.as_view(url=url_fe + 'inicio')),
    url(r'^nosotros$', RedirectView.as_view(url=url_fe + 'nosotros')),
    url(r'^productos$', RedirectView.as_view(url=url_fe + 'productos')),
    url(r'^capacitacion$', RedirectView.as_view(url=url_fe + 'capacitacion')),
    url(r'^contacto$', RedirectView.as_view(url=url_fe + 'contacto')),

    url(r'', include(application.urls))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
