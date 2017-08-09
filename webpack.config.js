module.exports = {   
    context: __dirname +'/src',
    entry: "./app.js",
    output: {
        path: __dirname+'/src',
        filename: "bundle.js"
    },
    module: 
    {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};