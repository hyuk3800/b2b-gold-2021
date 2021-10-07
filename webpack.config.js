const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        home1:"./src/client/js/home1.js",
        main: "./src/client/js/main.js",
        hambutton: "./src/client/js/hambutton.js",
        catalogeMain:"./src/client/js/catalogeMain.js",
        catalogeUpdate:"./src/client/js/catalogeUpdate.js",
        client1:"./src/client/js/client.js",
        stone:"./src/client/js/stone.js",
        quote:"./src/client/js/quote.js",
        stockMain:"./src/client/js/stockMain.js",
        stockUpload:"./src/client/js/stockUpload.js",
        orderMain:"./src/client/js/orderMain.js",
        orderUpload:"./src/client/js/orderUpload.js",
        repairUpload:"./src/client/js/repairUpload.js",
    },
    mode: "development",
    watch: true,
    plugins:[new MiniCssExtractPlugin({
        filename: "css/styles.css",
    })],
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
        clean:true,
    },
    module: {
        rules: [{
            test:/\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
            },
        },
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ],
        }
    ],
    },
};