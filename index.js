const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const dataString = fs.readFileSync('./data.json');
const dataJson = JSON.parse(dataString);

app.get('/', (req, res) => {
    res.send(`Test server is running on ${port}`);
});

app.get('/users', (req, res) => {
    res.send(dataJson);
});


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = dataJson.filter(d => d._id == id);
    console.log(`Got id ${id} ${user}`);
    res.send(user);
});



app.listen(port, () => {
    console.log(`Test server is listening ${port}`);
});