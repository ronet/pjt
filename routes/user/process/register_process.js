exports.info = {
    method: 'post',
    url: '/register_process'
}

exports.run = async (req, res, next) => {
    const mongo = req.app.get('mongoose');
    const sess = req.session;

    sess.user = await mongo.user({
        email: req.body.email,
        pw: req.body.pw,
        name: req.body.email
    }).save();

    res.redirect('/');
}