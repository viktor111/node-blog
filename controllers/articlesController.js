function getArticles (req, res) {
    res.render('articles',{
      isAuthenticated: req.session.isLoggedIn,
      isAdmin: req.session.isAdmin

    });
}

function postArticles (req, res) {

}

module.exports = {
    getArticles,
    postArticles
};
