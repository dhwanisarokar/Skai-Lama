const express = require('express');
const { podcastController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.post('/', auth, podcastController.createPodcast);
router.get('/:projectId', auth, podcastController.getPodcasts);
router.put('/:id', auth, podcastController.updatePodcast);
router.delete('/:id', auth, podcastController.deletePodcast);

module.exports = router;