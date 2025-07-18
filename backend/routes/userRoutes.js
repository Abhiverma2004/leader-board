// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getHistory,
} = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', addUser);
router.post('/users/claim', claimPoints);
router.get('/history', getHistory);

module.exports = router;