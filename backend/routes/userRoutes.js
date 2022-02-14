const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

// can put protect as a second argument anywhere to make it a protected route

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router