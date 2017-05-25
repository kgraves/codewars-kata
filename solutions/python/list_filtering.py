def list_filtering(l):
    return [n for n in l if type(n) is int]

import unittest
class TestListFiltering(unittest.TestCase):

    def test_list_filtering(self):
        self.assertEquals(list_filtering([1,2,'a','b']), [1,2])
        self.assertEquals(list_filtering([1,'a','b',0,15]),[1,0,15])
        self.assertEquals(list_filtering([1,2,'aasf','1','123',123]),[1,2,123])

if __name__ == '__main__':
    unittest.main()
