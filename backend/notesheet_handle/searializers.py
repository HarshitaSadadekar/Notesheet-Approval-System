from rest_framework import serializers

from .models import NoteSheet


class NoteSheetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NoteSheet
        fields = ('url','id', 'f_id', 'date', 'school', 'department','subject', 'description', 'objective'
                  , 'proposal_details', 'proposal_submitted_by', 'proposal_submitted_by_1'
                  , 'name_of_hod', 'name_of_director')


# class NoteSheetSerializer1(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = NoteSheet
#         fields = ('url',  'f_id', 'date', 'proposal_submitted_by_1'
#                   , 'name_of_hod', 'name_of_director')
