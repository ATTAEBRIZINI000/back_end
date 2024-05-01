const express = require('express');
const { createAdmin, authenticateAdmin } = require('../controllers/admin');

const router = express.Router();

// Create a new admin
// router.post('/admin/register', createAdmin);

// Authenticate admin
router.post('/admin/login', authenticateAdmin);

module.exports = router;
