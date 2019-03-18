exports.info = {
    method: 'post',
    url: '/login_process'
}

exports.run = (req, res, next) => {
    res.render('index');
}