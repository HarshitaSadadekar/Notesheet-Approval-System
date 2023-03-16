from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.

from .searializers import NoteSheetSerializer
from .models import NoteSheet


class NoteSheetViewSet(viewsets.ModelViewSet):
    queryset = NoteSheet.objects.all()
    serializer_class = NoteSheetSerializer