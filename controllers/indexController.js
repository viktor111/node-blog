function getIndex(req, res) {
    res.render('index',{
      isAuthenticated: req.session.isLoggedIn,
      isAdmin: req.session.isAdmin
    });
}

module.exports = {
    getIndex,
};
