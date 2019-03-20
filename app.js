const express = require('express'),
    bodyParser = require('body-parser'),
    cluster = require('cluster'),
    session = require('express-session'),
    serverUtils = require('./server-utils'),
    numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    let i;
    // for (i = 0; i < numCPUs; i++) {
    for (i = 0; i < 1; i++) {
        cluster.fork();
    }
} else {
    const app = express();

    app.set('views', __dirname + '/views');
    // app.set('views', __dirname + '/photon');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        // secure: true,//https에서만 사용하겠다
        // httponly: true,//세션쿠키를 사용할수 없게 한다
        // secret: '&JJ<A123NPKMUUID%4487$#AWE3#',
        secret: 'test',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 2 //2일
        }
    }));

    serverUtils.mongoose(app);
    serverUtils.passport(app);
    serverUtils.router(app, __dirname + '/routes');


    app.listen(80, () => {
        console.log('ptj is running ');
    })
}