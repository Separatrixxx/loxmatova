from minio import Minio
from settings import setting

class Data_minio:
    def __init__(self):
        self.client = Minio(setting.minio_url, access_key=setting.minio_access_key, secret_key=setting.minio_secret_key, secure=False)

    def make_album(self,name:str):
        self.client.make_bucket(name)

    def upload_photos(self,albom,name,filename):
        self.client.fput_object(albom,str(name),filename)

    def delete_picture(self,bucket,file_uuid):
        self.client.remove_object(bucket, file_uuid)



Data = Data_minio()
