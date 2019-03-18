exports.info = {
    method: 'get',
    url: '/login'
}

exports.run = (req, res, next) => {
    res.render('login');
}