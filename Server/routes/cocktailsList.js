const express = require('express');
const fs = require('promise-fs');
const router = express.Router();

const COCKTAILS_PATH = './cocktails.json';

router.get('/', async (req, res) => {
    const cocktails = await fs.readFile(COCKTAILS_PATH);
    res.send(cocktails);
});

router.post('/', async (req, res) => {
    try {
        const newCocktail = req.body;
        const cocktails = JSON.parse(await fs.readFile(COCKTAILS_PATH, 'utf8'));
        cocktails.push(newCocktail);
        await fs.writeFile(COCKTAILS_PATH, JSON.stringify(cocktails));
        res.send(newCocktail);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;