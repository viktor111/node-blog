const User = require('../models/userModel')

function getRegister(req, res){
    res.render('register');
}

function getLogin(req,res){
    res.render('login')
}

function postRegister(req, res, next){
    const {username, password} = req.body;

    if(username === '' || password === ''){
        console.log('Password or username is empty please try again!');
        return res.redirect('/login');
    }

    else {
      const user = new User({
        username: username,
        password: password
      });

      user.save().then(() => {
        console.log(`
          ${user}
          SAVED!
          `);
        return res.redirect('/');
      });
    }

}

function postLogin (req, res, next){
  const {username, password} = req.body;
  console.console.log(req);
console.log(res);
    User.findOne({username: username})
    .then(user => {
      if (!user) return res.redirect('/register');
      if (user){
        if (user.admin){
          req.session.isAdmin = true;
          console.log('Logged in as admin');
        }
        console.log('Logged in as user');
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
          console.log(err);
          res.redirect('/');
        })
      }
      res.redirect('/login')
    })
}

function postLogout (req, res, next){
  console.log('destroy');
  req.session.destroy();
  res.redirect('/login');
}

module.exports = {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    postLogout
  };
