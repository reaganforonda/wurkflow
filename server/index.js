const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const massive = require('massive');
dotenv.config();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
  }).catch(e => console.log(`Error: ${e}`));

app.listen(SERVER_PORT, ()=> {
    console.log(`Creeping on port: ${SERVER_PORT}`);
});