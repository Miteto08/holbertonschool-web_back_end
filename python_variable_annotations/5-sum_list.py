#!/usr/bin/env python3

"""Complex types - list of floats
mandatory"""


def sum_list(*input_list) -> float:
    """function that which takes a list input_list of floats as
    argument and returns their sum as a float."""
    add: float = 0
    for i in input_list:
        add += i
    return (add)
