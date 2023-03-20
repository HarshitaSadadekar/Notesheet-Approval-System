# from django.shortcuts import render
from rest_framework import viewsets
# from rest_framework import generics
# Create your views here.

from .searializers import NoteSheetSerializer
from .models import NoteSheet


class NoteSheetViewSet(viewsets.ModelViewSet):
    # class NoteSheetViewSet(generics.ListCreateAPIView):
    queryset = NoteSheet.objects.all()
    serializer_class = NoteSheetSerializer
# class NoteSheetViewSet1(viewsets.ModelViewSet):
#     # class NoteSheetViewSet(generics.ListCreateAPIView):
#     queryset = NoteSheet.objects.all()
#     serializer_class = NoteSheetSerializer
