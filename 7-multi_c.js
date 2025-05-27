node 7-multi_c.js 2
# Output:
# C is fun
# C is fun

node 7-multi_c.js 5
# Output:
# C is fun
# C is fun
# C is fun
# C is fun
# C is fun

node 7-multi_c.js abc
# Output:
# Missing number of occurrences

node 7-multi_c.js -3
# Output:
# (No output, as the loop condition i < -3 would not be met. This is acceptable behavior
# given the problem description and common interpretations of "print X times" where X is non-negative.)
