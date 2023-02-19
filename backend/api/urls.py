from django.urls import path
from .views import NoteViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("notes",NoteViewset,basename='notes')

urlpatterns = router.urls

