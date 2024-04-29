#!/usr/bin/env python3

"""Complex types - string and int/float to tuple
mandatory"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """function that which takes a list mxd_lst
    of integers and floats and returns their sum as a float."""
    return (k, v * v)
