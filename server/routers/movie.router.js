const express = require('express');
const router = express.Router();

// Getting entire list of movies
// does not need genres
router.get('/', (res, req) => {

});

// Get a single movie
// join with Genres
router.get('/single', (res, req) => {
    
});

module.exports = router;