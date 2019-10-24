var express = require('express');
var router = express.Router();
var search_controller = require('../controllers/searchController');
var page_controller = require('../controllers/pageController');


/* GET home page. */
router.get('/', page_controller.search);


router.get('/results/:query/:page', search_controller.search);

module.exports = router;
