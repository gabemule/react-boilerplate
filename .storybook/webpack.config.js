const path = require("path")

module.exports = ({ config }) => {
    config.resolve.alias = {
        "@": path.resolve(__dirname, "..", "src"),
        "@gabemule/react-boilerplate": path.resolve(__dirname, "../dist"),
    }

    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    return config
}
