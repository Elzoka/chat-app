const path = require('path')
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, ()=> {
    console.log(`The server  is up on port 3000 ${port}`);
});
