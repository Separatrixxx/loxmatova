from sqlalchemy import create_engine,String,Column,Integer,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import  sessionmaker,relationship
from settings import setting
from sqlalchemy_utils import database_exists, create_database


database_url = f"postgresql+psycopg2://postgres:{setting.database_password}@localhost/{setting.database_name}"
engine=create_engine(database_url)
Session = sessionmaker(engine)
Base = declarative_base()

if not database_exists(engine.url):
    create_database(engine.url)


class Albums(Base):
    __tablename__ = 'albums'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    photos = relationship('Photos')




class Photos(Base):
    __tablename__ = 'photos'
    id = Column(Integer, primary_key=True)
    album_id = Column(Integer,ForeignKey('albums.id'))
    album = relationship('Albums')




Base.metadata.create_all(engine)

def get_session():
    session = Session()
    try:
        yield session
    finally:
        session.close()