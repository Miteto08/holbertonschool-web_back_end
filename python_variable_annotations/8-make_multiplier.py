#!/usr/bin/env python3

"""Complex types - function
mandatory"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """function that which takes a float multiplier as argument
    and returns a function that multiplies a float by multiplier."""
    return lambda x: x * multiplier
