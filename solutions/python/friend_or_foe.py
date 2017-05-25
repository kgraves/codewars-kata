def friend_or_foe(x):
    return [ f for f in x if len(f) == 4 ]

import unittest
class TestFriendOrFoe(unittest.TestCase):

    def test_friend_or_foe(self):
        self.assertEquals(
            friend_or_foe(['Ryan', 'Kieran', 'Mark',]), ['Ryan', 'Mark'])

if __name__ == '__main__':
    unittest.main()
