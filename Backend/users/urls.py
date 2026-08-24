from .views import signup,login_view,get_current_user
from django.urls import path

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', login_view, name='login'),
    path('current_user/', get_current_user, name='current_user'),
]