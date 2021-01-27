var express = require('express');
var router = express.Router();
const usersService = require('../controllers/usersService')

router.get('/usernameValidate/:username',usersService.usernameValidate);

module.exports = router;


