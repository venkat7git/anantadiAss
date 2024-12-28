const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const auth = require('../middlewares/auth');


router.post('/upload', auth, videoController.uploadVideo);
router.get('/',auth, videoController.getVideos);

module.exports = router;
