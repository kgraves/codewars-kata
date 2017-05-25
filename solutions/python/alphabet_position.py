def alphabet_position(text):
    return ' '.join(str(ord(ch) - 96) for ch in text.lower() if ch.isalpha())

import unittest
class TestAlaphabetPosition(unittest.TestCase):

    def test_alphabet_position(self):
        self.assertEquals(
            alphabet_position("The sunset sets at twelve o' clock."),
            "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

if __name__ == '__main__':
    unittest.main()
