const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {
    entry: {
      main: './src/main/index.js',
    },
    output: {
      path: path.join(__dirname, 'app/main'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    target: "electron"
  },
  {
    entry: './src/renderer/index.html',
    output: {
      path: path.join(__dirname, 'app/renderer'),
      filename: '[name].html'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: "file-loader?name=[name].[ext]"
        },
      ]
    },
  },
  {
    entry: {
      style: './src/renderer/sass/main.scss'
    },
    output: {
      path: path.join(__dirname, 'app/renderer/css'),
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name].css")
    ]
  },
  {
    entry: {
      renderer: './src/renderer/index.jsx',
    },
    output: {
      path: path.join(__dirname, 'app/renderer'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    target: "atom"
  }
];