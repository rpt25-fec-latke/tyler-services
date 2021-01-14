const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  //code
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});