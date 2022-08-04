from apps.api.v1.anime.api import router as anime_router
from apps.api.v1.user.api import router as user_router
from ninja import NinjaAPI
from ninja.security import django_auth

api = NinjaAPI(csrf=True)
api.add_router("/anime", anime_router)
api.add_router("/user", user_router, auth=django_auth)
