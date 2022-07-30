import datetime

from pydantic import BaseModel


class Album(BaseModel):
    album: str
    created: datetime.date
    photos: list


class Albums(BaseModel):
    albums: list