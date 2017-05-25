def min_max(lst):
    return [min(lst), max(lst)]

import unittest
class TestMinMax(unittest.TestCase):

    def test_min_max(self):
        self.assertEquals(min_max([1,2,3,4,5]), [1,5])
        self.assertEquals(min_max([2334454,5]), [5, 2334454])

if __name__ == '__main__':
    unittest.main()
