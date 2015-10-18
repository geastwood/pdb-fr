module.exports = {
  entry: './src/index.js',
  output: {
    filename: '../server/public/javascripts/app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }
};
