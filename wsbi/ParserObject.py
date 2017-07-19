import json

class ParserObject(object):
    def __init__(self, object):
        self.__dict__ = json.loads(object)