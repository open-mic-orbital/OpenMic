const express = require('express');
require('./db/mongoose'); // open database connection

const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT;

app.use(express.json()); // to parse incoming json
app.use('/users', userRouter);

app.listen(port, () => {
    console.log('Server up on port ' + port);
})