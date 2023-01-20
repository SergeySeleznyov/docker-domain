var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const userCredentials = getUserCredentals(req);
  const result = JSON.stringify({userCredentials: userCredentials});
  res.send(result);
  // res.send('respond with a resource');
});

const getUserCredentals = (req) => {
  const headerName = "REMOTE_USER";
  const headerKey = headerName.toLowerCase();
  const remoteUser = req.headers[headerKey];
  return remoteUser;
}

module.exports = router;
