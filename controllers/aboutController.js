function getAbout (req, res) {
    res.render('about', {
      isAuthenticated: req.session.isLoggedIn,
      isAdmin: req.session.isAdmin
    });
}

module.exports = {
    getAbout,
};
