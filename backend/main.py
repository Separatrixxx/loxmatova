from fastapi import FastAPI
from routers import photos,albums
app = FastAPI()

app.include_router(photos.router)

app.include_router(albums.router)