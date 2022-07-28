from pymongo import MongoClient




class Data:
    def __init__(self):
        self.client = MongoClient()
        self.db = self.client.photos
        self.collection = self.db.photos


    def get_all_albums(self):

        res = self.collection.find_one()

        return res


    def get_albums_by_name(self,album_name:str):
        res = self.collection.find_one({"album": album_name})

        return res



    def create_album(self,album_name:str):
        album = {
            'album':album_name,
            'photos':[]
        }

        self.collection.insert_one(album)

    def insert_photos(self,album_name:str,photo_name:str):
        self.collection.update_one({'album':album_name},{'$push': {'photos':photo_name}})




    def delete_photo(self,album_name:str,photo_name:str):
        self.collection.update_one({'album':album_name},{'$pull': {'photos':photo_name}})



    def delete_albums(self,album_name:str):
        self.collection.delete_one({'album':album_name})










