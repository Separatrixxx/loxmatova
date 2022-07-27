from fastapi import APIRouter
from typing import  List
from fastapi import Depends,UploadFile
from crud import Crud

router = APIRouter()
from Data_minio import Data
import shutil
import os


@router.put('/photos/',tags=['photos'])
async def upload_photo(album_name:str,files: List[UploadFile],Crud = Depends(Crud)):

    if Data.client.bucket_exists(str(album_name)):
        pass
    else:
        Data.make_album(str(album_name))

    for file in files:
        with open(file.filename, 'wb') as buffer:
            shutil.copyfileobj(file.file, buffer)
        Data.upload_photos(album_name,file.filename, file.filename)
        Crud.insert_photos(file.filename,album_name)

    os.remove(file.filename)








