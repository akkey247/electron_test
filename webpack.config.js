const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: {
      index: './src/main/index.js',
    },
    output: {
      path: path.join(__dirname, 'app/main'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['es2015', {module: false}]
                ]
              }
            }
          ]
        }
      ]
    },
    target: "electron"
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
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: ['node_modules/compass-mixins/lib']
                },
              }
            ]
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
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['es2015', {modules: false}],
                  'react'
                ]
              }
            }
          ]
        }
      ]
    },
    target: "atom",
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/renderer/index.html'),
        filename: 'index.html',
        inject: 'body'
      })
    ]
  }
];