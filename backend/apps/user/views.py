from typing import IO, Generator
from django.http import HttpRequest, StreamingHttpResponse
from .models import CustomUser
from django.contrib.auth import get_user_model
import hashlib
import requests
from requests.utils import default_user_agent

import mimetypes

SESSION = requests.session()


def read_files_in_chunks(
    file_object: IO[bytes],
    chunkSize: int = 512,
) -> Generator[bytes, None, None]:
    """
    Lazy function to read a file piece by piece.
    Default chunk size: 512bytes.
    """
    while True:
        data = file_object.read(chunkSize)
        if not data:
            break
        yield data


def avatar_view(request: HttpRequest, user_id: int) -> StreamingHttpResponse:
    response: StreamingHttpResponse
    user: CustomUser = get_user_model().objects.get(id=user_id)

    if user.avatar:
        avatar_file = open(user.avatar.path, "rb")
        file_iterator = read_files_in_chunks(avatar_file)
        response = StreamingHttpResponse(
            streaming_content=file_iterator,
        )
        response["content-type"] = str(
            mimetypes.MimeTypes().guess_type(
                url=user.avatar.path,
            )[0]
        )

    else:
        # Proxy from Libravatar / Gravatar
        url = f"""https://seccdn.libravatar.org/avatar/{
            hashlib.md5(
                user.
                email.
                strip().
                lower().
                encode()
            )
            .hexdigest()}
        """
        res = SESSION.get(url, stream=True)

        response = StreamingHttpResponse(
            streaming_content=res,
        )
        response["content-type"] = res.headers["content-type"]
        response["server"] = default_user_agent()

    return response
