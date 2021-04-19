const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/movies', async (req, res) => {
    let moviesFromDB = await Movie.find();
    res.render('movies-show', { moviesFromDB });
});

module.exports = router;
