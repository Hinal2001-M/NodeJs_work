const router = require("express").Router();
const userController = require('../controllers/user-controller');
const authController = require('../controllers/auth-controller');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh', authController.refresh);
router.get('/searchUser', userController.searchUsers);
router.get('/u/:username', userController.getUserByUsername);
router.get('/:id', userController.getUser);
router.get("/followings/:username", userController.getFollowings);
router.get("/followers/:username", userController.getFollowers);
router.put("/:id", authController.verify, userController.updateUser);
router.put(
    "/:username/follow",
    authController.verify,
    userController.followUser
);
router.put(
    "/:username/unFollow",
    authController.verify,
    userController.unFollowUser
);

module.exports = router;