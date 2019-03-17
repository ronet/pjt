const express = require('express'),
    bodyParser = require('body-parser'),
    cluster = require('cluster');
numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    let i;
    for (i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    const app = express();

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    //middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());


    app.listen(80, () => {
        console.log('ptj is running');
    })
}