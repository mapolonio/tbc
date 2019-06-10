const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const router = express.Router();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

router.get('/', function(req, res) {
  const { indexUpdated } = req.query;

  if (indexUpdated) {
    // TODO: show message indicating index was updated
    console.log({ indexUpdated });
  }

  return res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

router.post('/search', function(req, res) {
  const { query = '' } = req.body;

  return res.json({ results: [] });
});

router.post('/create-index', (req, res) => {
  return res.send();
});

app.use('/', router);
app.listen(port, () => console.log(`TBC search running in port: ${port}!`));
