var path = require("path");

module.exports = {
    entry: "./public/scripts/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module:{
        rules:[{
            loader:"babel-loader",
            test:/\.js$/,
            exclude:/node_modules/

        }]
    },
    devtool:"cheap-module-eval-source-map"
    
}