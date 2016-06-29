module.exports = {
  entry: './app/main.jsx',
  output: {
    path: './app',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100,
    proxy: {
      '/api/*': {
        target: 'http://newreactions.dev:3000',
        rewrite: function rewrite(req) {
          req.url = req.url.replace(/^\/api/, '');
        },
      },
    },
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
