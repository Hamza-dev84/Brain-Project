const express = require('express');
const router = express.Router();
const controller = require('../controllers/brainnet.controller');

router.post('/home', controller.submitHomeEmail);
router.post('/contact', controller.submitContact);
router.post('/availability', controller.submitAvailability);

// Oracle EBS lookups for the Check Availability form
router.get('/lead-sources', controller.getLeadSources);
router.get('/packages', controller.getPackages);

module.exports = router;
