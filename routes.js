const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
})

router.get('/regex/ab[0-9]cd', (req, res) => {
  const valor = req.url.split('/')[2];
  res.status(200).send(`Voce digitou ${valor}`)
});

router.get('*', (req, res) => res.status(404).send('404 - Not Found'));

module.exports = router;