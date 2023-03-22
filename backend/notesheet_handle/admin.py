from django.contrib import admin

# Register your models here.
from django.apps import apps

post_models = apps.get_app_config('notesheet_handle').get_models()

for model in post_models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass
