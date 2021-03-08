const { Router } = require('express');
const { Keeper } = require('../db');
const router = Router();


function checkLogin(req, res, next) {
    if (req.session.user == null) {
      return res.redirect('/login');
    }
    next();
}

  
router.get('/', checkLogin, async (req, res) => {
    res.render('index.ejs');
});


router.post('/', checkLogin, async (req, res) => {
    try {
      // acá coloco lo que intento hacer
      await Keeper.create(req.body);
  
    } catch (err) {
      // acá coloco lo que haré si ocurre algún error
      req.flash('errors', err.errors[key].message);
    }
    res.redirect('/');
});
  
  
module.exports = router;