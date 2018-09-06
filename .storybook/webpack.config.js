const path = require("path");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig);

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            exclude: path.resolve(__dirname, "../node_modules"),
            use: [
                require.resolve("ts-loader"),
                require.resolve("react-docgen-typescript-loader"),
            ],
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../src")
        }
    );

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};