const express = require('express');
const router = express.Router();

const users = []

router.get('/', (req, res) => {
  res.status(200).json(users);
})

router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  
  if(!user) {
    res.status(404).send('User not found');
  }  
  
  res.status(200).json(user);
})

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);

  res.status(201).json(user);
})

router.delete('/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));

  if(user) {
    const index = users.indexOf(user);

    users.splice(index, 1);

    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
})




module.exports = router;