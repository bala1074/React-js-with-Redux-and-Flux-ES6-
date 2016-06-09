var port = process.env.PORT || 8080;
module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
   devServer: {
    inline: true,
    contentBase: './',
    port: port
  }
}
 
