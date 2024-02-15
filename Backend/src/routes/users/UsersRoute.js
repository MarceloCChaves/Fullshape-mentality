const { Router } = require('express');
const UserController = require('../../controllers/user/UserController');
const userAuthenticated = require("../../middlewares/userAuthenticated");

const router = Router();

router.use(userAuthenticated);

router.post('/users', UserController.registerUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.editUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;