from rest_framework import serializers

from .models import NoteSheet


class NoteSheetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NoteSheet
        fields = ('url', 'f_id', 'date', 'school', 'department', 'description')
