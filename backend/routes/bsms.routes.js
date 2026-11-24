const express = require('express');
const router = express.Router();
const controller = require('../controllers/bsms.controller');

router.post('/campaign', controller.submitCampaign);
router.post('/contact', controller.submitContact);

module.exports = router;
