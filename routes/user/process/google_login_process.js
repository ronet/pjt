exports.info = {
    method: 'post',
    url: '/google_login_process'
}

exports.run = (req, res, next) => {
    res.redirect('/google_login_process');
}