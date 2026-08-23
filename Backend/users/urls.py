from .views import signup,login_view
from django.urls import path

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),
]