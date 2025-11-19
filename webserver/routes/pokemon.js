var express = require('express');
var router = express.Router();

const URI = 'https://pokeapi.co/api/v2/';
const URL = URI + 'pokemon/'

router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const response = await fetch(URL+ name)
    const data = await response.json();

    res.json(data);
})
module.exports = router