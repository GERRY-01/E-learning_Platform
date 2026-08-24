import email

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSignupSerializer, UserLoginSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
@api_view(['POST'])
def signup(request):
    serializer = UserSignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User created successfully.'}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_view(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        user = authenticate(request, username=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'message': 'Login successful.',
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=200)
        return Response({'error': 'Invalid credentials.'}, status=401)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def get_current_user(request):
    print("USER:", request.user)
    print("AUTHENTICATED:", request.user.is_authenticated)
    print("SESSION KEY:", request.session.session_key)
    print("COOKIES:", request.COOKIES)
    if request.user.is_authenticated:
        user_data = {
            'first_name': request.user.first_name,
            'last_name': request.user.last_name,
            'email': request.user.email,
        }
        return Response(user_data, status=200)
    return Response({'error': 'User not authenticated.'}, status=401)
