def series_sum(n):
    step = 3
    sum = 0

    for i in xrange(n):
        sum += 1.0 / (1 + (step * i))

    # TODO need to format and convert to string
    return '%.2f' % sum

import unittest
class TestIsBalanced(unittest.TestCase):

    def test_is_balanced(self):
        self.assertEquals(series_sum(1), "1.00")
        self.assertEquals(series_sum(2), "1.25")
        self.assertEquals(series_sum(3), "1.39")

if __name__ == '__main__':
    unittest.main()
