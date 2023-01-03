from django.http import HttpRequest, HttpResponse


# Django mangles raw bytes encoded with URL encoding in the query string by
# first decoding them into bytes, and then attempting to decode
# that into UTF-8.
#
# This means that whenever any of the raw bytes don't line up with a
# unicode codepoint, they get replaced with the � character (unicode name
# 'REPLACEMENT CHARACTER', with a hex of `0xEF 0xBF 0xBD`).
#
# This is the fault of the django `QueryDict` object.
#
# As specified in the bittorrent protocol, the `info_hash` key in the
# query string comes to us with its value set to a raw sha1 digest
# (a series of bytes). Thus, we have to use this function instead
# of the `QueryDict` object from the `HttpRequest` object for this key.
def get_raw_querystring_value(request: HttpRequest, key: str) -> dict[str, str | int]:
    qs = request.META["QUERY_STRING"]
    qs_key = key + "="

    start = qs.find(qs_key) + len(qs_key)

    if start == -1:
        return None

    end = qs.find("&", start)

    if end == -1:
        return qs[start:]
    else:
        return qs[start:end]
