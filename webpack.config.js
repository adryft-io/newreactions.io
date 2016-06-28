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
