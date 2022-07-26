from fastapi import FastAPI
from routers import photos

app = FastAPI()
app.include_router(photos.router)