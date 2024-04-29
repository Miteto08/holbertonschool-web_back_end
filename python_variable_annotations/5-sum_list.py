#!/usr/bin/env python3

"""Complex types - list of floats
mandatory"""


def sum_list(*input_list) -> float:
    sum = 0
    for num in input_list:
        sum += num
    """function that which takes a list input_list of floats as
    argument and returns their sum as a float."""
    return (sum(float(input_list)))
