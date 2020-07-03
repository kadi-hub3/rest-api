const express = require('express');
const personRoute = require('./routes/person');
const clientRoute = require('./routes/client');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});
app.use(personRoute);
app.use(clientRoute);
app.use(express.static('public'));

//handler for 404
app.use((req, res, next) => {
    res.status(404).send('ure lost')
})

//handler for 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server running on ${PORT}`));