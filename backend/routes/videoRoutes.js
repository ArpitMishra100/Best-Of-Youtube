const express = require('express');
const { getVideos } = require('../controllers/videoControllers');

const router = express.Router();

router.get('/', getVideos);

module.exports = router;
