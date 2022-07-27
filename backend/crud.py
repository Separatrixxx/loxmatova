from database import get_session
from fastapi import Depends
from sqlalchemy.orm import Session
from database import Albums,Photos



class Crud:
    def __init__(self,session:Session = Depends(get_session)):
        self.session = session


    def insert_photos(self,filename,album_name):
        try:
            album_id =(
                self.session
                    .query(Albums.id)
                    .filter(Albums.name == album_name)
                    .first()
            )[0]
        except:
            album = Albums(name = album_name)
            self.session.add(album)
            self.session.commit()

            album_id = (
                self.session
                    .query(Albums.id)
                    .filter(Albums.name == album_name)
                    .first()
            )[0]

            x = Photos(
                id=filename,
                album_id=album_id
            )
            self.session.add(x)
            self.session.commit()




a= Crud()
#a.insert_photos('1234','first')

