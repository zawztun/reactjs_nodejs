var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/post_name", async (req, res) => {
  let { name } = req.body
  console.log(name);
})
module.exports = router;
