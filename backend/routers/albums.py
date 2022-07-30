from fastapi import APIRouter
from fastapi import Depends
from database import Database
from Data_minio import Data_minio
from models import Album,Albums




router = APIRouter()



@router.get('/albums',tags=['albums'],response_model=Albums)
async def get_all_albums(Database = Depends(Database)):
    albums = Albums(
        albums = Database.get_all_albums()
    )
    return  albums


@router.get('/albums{count}',tags=['albums'],response_model=Albums)
async def get_albums(count:int,Database = Depends(Database)):
    albums = Albums(
        albums=Database.get_all_albums()[:count]
    )
    return albums


@router.delete('/albums{album_name}',tags=['albums'])
async def delete_album(album_name,Database = Depends(Database),Data = Depends(Data_minio)):
    Database.delete_albums(album_name)
    Data.delete_album(album_name)



@router.get('/album{album_name}',tags= ['albums'],response_model=Album)
async def get_picture_from_album(album_name,Database = Depends(Database)):
        return Database.get_albums_by_name(album_name)