module.exports = {
  entry: './src/root.js',
  output: {
    filename: './server/public/javascripts/app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }
};
