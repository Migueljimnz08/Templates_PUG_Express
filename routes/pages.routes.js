const express = require('express');
const router = express.Router();
const fetchFilm = require("../utils/fetchFilm");

//Vista inicio
router.get('/', (req,res) => {
    res.render('home')
});

router.post('/film', (req,res) => {
    const title = req.body.title;
    if(!title) {
        return res.redirect('/');
    }
    res.redirect(`/film/${title}`);
});

router.get('/film/:title', async (req,res) => {
    const title = req.params.title;
    const film = await fetchFilm(title);
    
    res.render('film', { film });
});

module.exports = router;