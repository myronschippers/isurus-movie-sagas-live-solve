const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Getting entire list of movies
// does not need genres
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies"
                        ORDER BY "title" ASC;`

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error with GET: ', err);
            res.sendStatus(500);
        });
});

// Get a single movie
// join with Genres
router.get('/single/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies"
                        JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
                        JOIN "genres" ON "movies_genres".genre_id = "genres".id
                        WHERE "movies".id = $1;`
    const movieId = req.params.id;

    pool.query(queryText, [movieId])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error with GET (single): ', err);
            res.sendStatus(500);
        })
});

module.exports = router;