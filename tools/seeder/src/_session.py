from typing import Any
from urllib3.util import Retry

from requests import Session
from requests.structures import CaseInsensitiveDict
from requests.utils import DEFAULT_ACCEPT_ENCODING
from requests_cache import CacheMixin
from requests_ratelimiter import LimiterMixin
from requests.adapters import HTTPAdapter
from requests_cache import RedisCache  # type: ignore
from requests_ratelimiter import RedisBucket

from redis import ConnectionPool


class CachedLimiterSession(CacheMixin, LimiterMixin, Session):
    """
    Session class with caching and rate-limiting behavior.
        Accepts arguments for both LimiterSession and CachedSession.
    """

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.headers = self.default_headers()

    def default_headers(self) -> CaseInsensitiveDict[str | bytes]:
        """
        :rtype: requests.structures.CaseInsensitiveDict
        """
        return CaseInsensitiveDict(
            {
                "User-Agent": "CoreProject",
                "Accept-Encoding": DEFAULT_ACCEPT_ENCODING,
                "Accept": "*/*",
                "Connection": "keep-alive",
            }
        )


CACHE_NAME = "seeder"
RETRY_STATUSES = [408, 429, 500, 502, 503, 504]

retry_strategy = Retry(
    total=10,
    status_forcelist=RETRY_STATUSES,
)
adapter = HTTPAdapter(max_retries=retry_strategy)
redis_pool = ConnectionPool(host="localhost", port=6379, db=0)

session = CachedLimiterSession(
    bucket_class=RedisBucket,
    backend=RedisCache(),
    # Undocumented ( pyrate-limiter )
    bucket_kwargs={
        "redis_pool": redis_pool,
        "bucket_name": CACHE_NAME,
        "expire_time": 30,
    },
    # https://docs.api.jikan.moe/#section/Information/Rate-Limiting
    per_minute=60,
    per_second=1,
    per_host=True,
    # https://requests-cache.readthedocs.io/en/stable/user_guide/expiration.html
    expire_after=360,
)
session.mount("http://", adapter)
session.mount("https://", adapter)
