from typing import Any, Callable

from django.http import HttpRequest


# built-in function `id()` is not actually the identity function!
def identity(x: Any) -> Any:
    return x


# This is an interface for the django `request.GET` dictionary that makes it
# easier to work with when GET parameters are required to be integers or
# port numbers or any type of data other than plain, unvalidated, strings.
#
# It takes the django `request` object, and a dictionary specifying which
# and what kind of GET parameters to expect.
#
# This dictionary is a mapping of a parameter name to a tuple containing three values:
#   (1) `required`: a boolean, which if `True`, indicates that the parameter *must* be
#                   present in the request (if `False`, the parameter is optional)
#   (2) `constructor`: a function that takes a string and returns a value of any type
#                      (for instance, a function that converts a string to an int),
#                      while performing any kind of validation
#   (3) `error_message`: an error message to show should `constructor` throw a `ValueError`
#
# This function does three things:
#   (1) checks that every GET parameter which is marked as required
#       is present in the request object
#   (2) applies each function given in the dictionary to every corresponding
#       GET parameter that is present in the request object
#   (3) checks for the `ValueError` exception when applying the function that
#       corresponds to each GET parameter
#
# On an error with one of the parameters, this function raises a ValueError
# with a string describing the error.
Required = bool
ErrorMessage = str
Constructor = Callable
ParamInfo = tuple[Required, Constructor, ErrorMessage]

ParamName = str

Params = dict[ParamName, ParamInfo]


def fill_typed_get_parameters(request: HttpRequest, parameters: Params) -> dict[str, Any]:
    _dict = {}

    for k, (required, constructor, error_message) in parameters.items():
        if k in request.GET:
            try:
                _dict[k] = constructor(request.GET[k])
            except ValueError:
                raise ValueError(f"The GET parameter '{k}' {error_message}.")
        elif required:
            raise ValueError(f"'{k}' is a required GET parameter.")

    return _dict
