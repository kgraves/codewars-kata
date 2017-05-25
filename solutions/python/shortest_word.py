def find_short(s):
    srted = sorted(s.split(' '), cmp=lambda x,y: len(x)-len(y))
    return len(srted[0])

import unittest
class TestShortestWord(unittest.TestCase):

    def test_shortest_word(self):
        self.assertEquals(find_short("bitcoin take over the world maybe who knows perhaps"), 3)
        self.assertEquals(find_short("turns out random test cases are easier than writing out basic ones"), 3)
        self.assertEquals(find_short("lets talk about javascript the best language"), 3)
        self.assertEquals(find_short("i want to travel the world writing code one day"), 1)
        self.assertEquals(find_short("Lets all go on holiday somewhere very cold"), 2)

if __name__ == '__main__':
    unittest.main()
