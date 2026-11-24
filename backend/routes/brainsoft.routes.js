const express = require('express');
const router = express.Router();
const controller = require('../controllers/brainsoft.controller');
const upload = require('../middlewares/upload');

router.post('/planner', controller.submitPlanner);
router.post('/contact', upload.single('attachment'), controller.submitContact);

module.exports = router;
