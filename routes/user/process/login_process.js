exports.info = {
    method: 'post',
    url: '/login_process'
}

exports.run = async (req, res, next) => {
    // const mongo = req.app.get('mongo');
    // console.log(mongo['user']);
    const passport = req.app.get('passport');
    console.log('PASSPORT IN LOGIN_PROCESS : ',passport);
    console.log('CHECK POINT 1 : ', req.session);

    await passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    });
    console.log('CHECK POINT 2 : ', req.session);
    // res.redirect('/');
}