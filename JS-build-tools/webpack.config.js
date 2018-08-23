const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.join(__dirname, '.')
const APP_DIR = path.resolve(__dirname, '.')

const config = {
  mode: 'development',
  entry: {
    main: `${APP_DIR}/index.js`
  },
  output: {
    path: BUILD_DIR,
    filename: 'assets/[name].bundle.js',
    chunkFilename: 'assets/[id].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.es6'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/images/[name].[ext]' },
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { comments: true }
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development')
    })
  ]
}

module.exports = config
