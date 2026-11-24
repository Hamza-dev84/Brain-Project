const express = require('express');
const router = express.Router();

const controller = require('../controllers/braincloud.controller');

router.post('/inquiry', controller.submitInquiry);
router.post('/contact', controller.submitContact);

module.exports = router;