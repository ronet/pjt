exports.info = {
    method: 'get',
    url: '/'
}

exports.run = (req, res, next) => {
    
    const mongo = req.app.get('mongoose');
    req.cookies || res.cookie('isUser', 'Ronet' , {maxAge: 1000})
    console.log(req.cookies)
    // Cookies that have not been signed
    // console.log('Cookies: ', req.cookies)
    // console.log('session: ', req.session)
  
    // Cookies that have been signed
    // console.log('Signed Cookies: ', req.signedCookies)
    // res.status(200);
    // res.send({result:true, msg: '/test'});
    // res.end();
    res.render('index');
}