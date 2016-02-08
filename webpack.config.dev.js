var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/client/entry'
    ]
  },

  output:{
    filename: './bundle.js',
    path: path.join(__dirname,'/public/js/'),
    publicPath:'http://localhost:8080/js/'
  },

  plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      function () {
        this.plugin('done', function (stats) {
            if (stats.compilation.errors && stats.compilation.errors.length) {
                console.log('Found following error(s):');
                stats.compilation.errors.forEach(function(theError) {
                    console.log(theError.error);
                });
                process.exit(1);
            }
        });
    }
  ],

  resolve: {
          root: __dirname,
          modulesDirectories: [
            'src',
            'node_modules'
          ],
          extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname,'src'),
        loader: 'react-hot!babel!eslint'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      },
      {
        test:/\.css/,
        include:path.join(__dirname, 'node_modules/material-design-icons/iconfont'),
        loader: 'style!css!less'
      },
      {
         test: /\.(eot|woff|woff2|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9][0-9])?$/,
         include: path.join(__dirname, 'node_modules/material-design-icons/iconfont'),
         loader: "file"
      }
    ]
  }
};
