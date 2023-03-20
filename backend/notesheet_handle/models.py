from django.db import models


# Create your models here
class FacultyDetails(models.Model):
    employee_id = models.CharField(max_length=20)
    Name = models.CharField(max_length=50)


class NoteSheet(models.Model):
    f_id = models.ForeignKey(
        FacultyDetails, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField(auto_now_add=True)
    subject=models.TextField()
    school = models.CharField(max_length=100)
    subject = models.TextField()
    department = models.CharField(max_length=100)
    description = models.TextField()
    objective = models.TextField()
    proposal_details = models.TextField()
    proposal_submitted_by = models.CharField(max_length=255)
    proposal_submitted_by_1 = models.CharField(max_length=255)
    name_of_hod = models.CharField(max_length=255)
    name_of_director = models.CharField(max_length=255)


class NoteSheetAdditional(models.Model):
    f_id = models.ForeignKey(NoteSheet, on_delete=models.SET_NULL, null=True)
    Status = models.IntegerField()
