exports.info = {
    method: 'post',
    url: '/logout_process'
}

exports.run = (req, res, next) => {
    res.render('index');
}