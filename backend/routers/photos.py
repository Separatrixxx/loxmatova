from fastapi import APIRouter
from typing import  List
from fastapi import Depends,UploadFile
router = APIRouter()
from Data_minio import Data
import shutil
import os


@router.put('/photos/',tags=['photos'])
async def upload_photo(name:str,id:int,files: List[UploadFile]):

    if Data.client.bucket_exists(str(name)):
        pass
    else:
        Data.make_picture(str(name))

    for file in files:
        with open(file.filename, 'wb') as buffer:
            shutil.copyfileobj(file.file, buffer)
    Data.upload_photos(name,id, file.filename)
    os.remove(file.filename)







