  const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const articlesController = require('../controllers/articlesController');
const authController = require('../controllers/authController');


router.get('/', indexController.getIndex);
router.get('/about', aboutController.getAbout);
router.get('/articles', articlesController.getArticles);
router.get('/register', authController.getRegister);
router.get('/login', authController.getLogin);

router.post('/register', authController.postRegister);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);
// ToDo ARTICLE

module.exports = router;
