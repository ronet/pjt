exports.info = {
    method: 'get',
    url: '/register'
}

exports.run = (req, res, next) => {
    res.render('register');
}