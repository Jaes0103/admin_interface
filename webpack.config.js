const path = require('path');

module.exports = {
  // Set the mode to development or production
  mode: 'production', // Change to 'production' for production builds

  // Entry point of your application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },

  optimization: {
    splitChunks: {
      chunks: 'all', 
    },
  },

  // Module rules
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use these loaders for CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Match image files
        type: 'asset/resource', // Automatically handle image files
      },
    ],
  },

  // Optimization settings
  optimization: {
    splitChunks: {
      chunks: 'all', // Split chunks for better caching
    },
  },

  // Enable source maps for easier debugging
  devtool: 'inline-source-map',

  // DevServer configuration
  devServer: {
    static: './dist', // Serve files from the dist folder
    hot: true, // Enable hot module replacement
  },
};
