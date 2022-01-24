const router = require('express').Router();

const babyName = require('./routes/babyName');

router.get("/baby-name/:name", babyName); 

/*router.get('/baby-name/:name', function(req, res) {
    let data = byName[fixName(req.params.name)];
    res.send(formatToHTML(data), babyName);
  })
  */


module.exports = router; 
