const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies/:movieId', async (req, res) => {
    let movieId = req.params.movieId;
    let movieInfo = await Movie.findById(movieId);
    res.render('details-movie', { movieInfo });
});

module.exports = router;
