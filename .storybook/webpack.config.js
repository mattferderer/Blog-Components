const path = require("path");
const include = path.resolve(__dirname, '../src');

const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig);

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            exclude: path.resolve(__dirname, "../node_modules"),
            include,
            use: [
                require.resolve("ts-loader"),
                require.resolve("react-docgen-typescript-loader"),
            ],
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        modules: true,
                        sourceMap: true,
                        includePaths: [
                            include,
                            // path.resolve(__dirname, '../node_modules/foundation-sites/scss'),
                            // path.resolve(__dirname, '../node_modules/foundation-sites/scss/util'),
                            path.resolve(__dirname, '../node_modules'),
                        ]
                    }
                }
            ],
            include
        }

    );

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
};