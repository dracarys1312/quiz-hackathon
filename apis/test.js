'use strict';
var express = require('express'),
    db = require('../models'),
    router = express.Router();

router.get('/contest', function(req, res){
  var contests = db.Test;
  contests.findOne(function(err, data){
    res.json(data);
  });
});

// router.post('/upload', function(req, res){
//     var Test = new db.Test(req.body);
//     Test.save(function(err, data){
//       if (err){
//         return res.status(406).send(JSON.stringify({err}));
//       }
//       res.send(JSON.stringify(data));
//     });
// });

module.exports = router;
