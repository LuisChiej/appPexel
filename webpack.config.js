const path = require('path');

module.exports = {
    entry: './public/javascripts/app.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(`${__dirname}/public/javascripts`, 'dist'),
    }
};