from fastapi import APIRouter
from typing import  List
from fastapi import Depends,UploadFile
from database import Database

from Data_minio import Data_minio
import shutil
import os


router = APIRouter()

@router.put('/photos/',tags=['photos'])
async def upload_photo(album_name:str,files: List[UploadFile],Database = Depends(Database),Data = Depends(Data_minio)):
    photos=[]

    if Data.client.bucket_exists(str(album_name)):
        pass
    else:
        Data.make_album(str(album_name))

    for file in files:
        photos.append(file.filename)
        with open(file.filename, 'wb') as buffer:
            shutil.copyfileobj(file.file, buffer)
        Data.upload_photos(album_name,file.filename, file.filename)
        os.remove(file.filename)
    if album_name not in Database.get_all_albums():
        Database.create_album(album_name)
    for photo in photos:
        Database.insert_photos(album_name,photo)

    return photos




@router.get('/albums',tags=['albums'])
async def get_all_albums(Database = Depends(Database)):
    return  Database.get_all_albums()


@router.get('/albums{count}',tags=['albums'])
async def get_albums(count:int,Database = Depends(Database)):
    return Database.get_all_albums()[:count]


@router.delete('/albums',tags=['albums'])
async def delete_album(album_name,Database = Depends(Database),Data = Depends(Data_minio)):
    Database.delete_albums(album_name)
    Data.delete_album(album_name)
