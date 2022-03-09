from pydoc import doc
from django.contrib import admin
from django.urls import path, include
#from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('auth/', obtain_auth_token),
    path('auth/', include('users.urls')),
    path('api/', include('products.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)