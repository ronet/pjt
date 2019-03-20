module.exports = (app) => {
    const mongoose = require('mongoose'),
    schemas = require('../schemas');

    const mongo = {
        host: 'localhost',
        port: 27017,
        user: 'root',
        database: 'pjt',
    }

    mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.database}`, { useNewUrlParser: true });

    
    Object.keys(schemas).forEach((key) => {
        mongoose[key] = mongoose.model(key, new mongoose.Schema(schemas[key]));
    })
    app.set('mongoose', mongoose);
}