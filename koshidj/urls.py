
from django.contrib import admin
from django.urls import path ,include
from django.conf.urls.static import static
from django.conf import settings
from . import views
from django.views.generic.base import TemplateView

react_routes = getattr(settings, 'REACT_ROUTES', [])

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/',include('api.urls')),
    path('',views.index,name='index')
]




for route in react_routes:
    urlpatterns += [
        path('{}'.format(route), TemplateView.as_view(template_name='index.html'))
    ]


urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
