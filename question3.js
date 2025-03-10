const express = require('express');
const app = express();            
const port = 3000;

app.get('/', (req, res) => {
    res.send('Express is working! Mendoza, Perry Ian A.')      //method to send or request response
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)        //method to start the server
});