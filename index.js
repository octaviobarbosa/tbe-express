const express = require('express');
const router = require('./routes');
const userRouter = require('./users.routes');

const app = express();
const port = 3000;

app.use(express.json())
app.use('/users', userRouter);
app.use(router);

router.get('*', (req, res)  => res.status(404).send('404 - Not Found'));

app.listen(port, () => console.log('Server listening on port 3000!')) 

module.exports={app}
