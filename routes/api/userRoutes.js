const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriends,
  removeFriends,
} = require('../../controllers/userController');

// /api/User
router.route('/').get(getUsers).post(createUser);

// /api/User/:UserId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/User/:UserId/friends/:FriendsId
router.route('/:userId/friends/:friendId').post(addFriends).delete(removeFriends);

module.exports = router;
