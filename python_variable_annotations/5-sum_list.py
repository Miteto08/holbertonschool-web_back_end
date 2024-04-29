#!/usr/bin/env python3

"""Complex types - list of floats
mandatory"""

from typing import List


def sum_list(*input_list: List[float]) -> float:
    """function that which takes a list input_list of floats as
    argument and returns their sum as a float."""
    add: float = 0
    for i in input_list:
        add += i
    return (add)
