exports.info = {
    method: 'post',
    url: '/login_process'
}

exports.run = (req, res, next) => {
    // const mongo = req.app.get('mongo');
    // console.log(mongo['user']);
    const passport = req.app.get('passport');

    console.log('passport', passport);
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
    res.redirect('/');
}