const express = require('express');
const router = express.Router();
const controller = require('../controllers/braintel.controller');
const uploadResume = require('../middlewares/braintelResumeUpload');

router.post('/referral', controller.submitReferral);
router.post('/home', controller.submitHomepage);
router.post('/contact', controller.submitContact);
router.post('/resume', uploadResume.single('resume'), controller.submitResume);


module.exports = router;
