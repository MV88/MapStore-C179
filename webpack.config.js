const path = require("path");

const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

module.exports = require('./MapStore2/build/buildConfig')(
    {
        'MapStore-C179': path.join(__dirname, "js", "app"),
        'MapStore-C179-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
        'MapStore-C179-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
    },
    {
        "themes/default": path.join(__dirname, "themes", "theme.less")
    },
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "dist/",
    '.MapStore-C179',
    [],
    {
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        "@js": path.resolve(__dirname, "js")
    }
);
