const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prerenderedRoutesList = ['/login', '/home', '/'];

module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({ analyzerMode: 'static', generateStatsFile: true }),
            new PrerenderSPAPlugin({ staticDir: path.join(__rootDirname), routes: prerenderedRoutesList });
        ]
    };
};