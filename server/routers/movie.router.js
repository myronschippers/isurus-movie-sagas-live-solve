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
router.get('/single', (res, req) => {
    
});

module.exports = router;