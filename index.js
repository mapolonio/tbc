const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const router = express.Router();

app.use(express.static(__dirname + '/public'));

router.get('/',function(req,res){
  const { search = false, indexUpdated } = req.query

  if (indexUpdated) {
    // TODO: show message indicating index was updated
    console.log({indexUpdated});
  }

  if (search !== false) {
    // TODO: do actual search and render results
    console.log({search});
  }

  return res.sendFile(path.join(__dirname+'/public/html/index.html'));
});

router.post('/',function(req,res){
  const { search = '' } = req.body

  return res.redirect(`?search=${search}`)
});

router.post('/create-index', (req, res) => {
  return res.redirect('/?indexUpdated=true');
})

app.use('/', router);
app.listen(port, () => console.log(`TBC search running in port: ${port}!`))
