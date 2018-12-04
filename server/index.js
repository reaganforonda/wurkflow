const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const {SERVER_PORT} = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on port: ${SERVER_PORT}`);
});