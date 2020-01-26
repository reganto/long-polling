import json

from tornado.websocket import WebSocketHandler
from tornado.httpclient import AsyncHTTPClient
from handlers.base import BaseHandler
from models import User, session


class HomeHandler(BaseHandler):
    def get(self):
        self.render('home/index.html')


class AuthHandler(BaseHandler):
    def get(self):
        self.render('auth.html')

    async def post(self):
        http_client = AsyncHTTPClient()
        response = await http_client.fetch("https://dog.ceo/api/breeds/image/random")
        result = response.body.decode('utf-8')
        result = json.loads(result)
        self.write(result.get('message'))
