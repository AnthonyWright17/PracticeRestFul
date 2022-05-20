const { Router } = require('express');
const controller = require('./animeController');

const router = new Router();

router.get('/', controller.getAllAnime);
router.post('/', controller.addAnime);

router.get('/:id', controller.getAnimeById);

router.delete('/:id', controller.deleteAnime);

// router.put('/:id', controller.updateAnime);

module.exports = router;