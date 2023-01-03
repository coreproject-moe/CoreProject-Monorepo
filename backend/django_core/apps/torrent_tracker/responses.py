from bencode import bencode
from django.http import HttpResponse


def BencodedResponse(data: dict) -> HttpResponse:
    return HttpResponse(
        bencode(data),
        content_type="text/plain",
    )
