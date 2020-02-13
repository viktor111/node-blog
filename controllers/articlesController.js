//const Article = require('../models/artilceModel');

function getArticles (req, res) {
    res.render('articles',{
      isAuthenticated: req.session.isLoggedIn,
      isAdmin: req.session.isAdmin

    });
}

function postArticles (req, res) {
    const {title, content} = req.body;

    if (title === '' || content === ''){
        console.log('Title or content empty');
        res.redirect('/')
    }
    else {
        const artilce = new Article({
          title: title,
          content: content
        })

    }
}

module.exports = {
    getArticles,
    postArticles
};
