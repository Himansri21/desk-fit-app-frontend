// Node.js's built-in 'path' module helps manage file paths across different operating systems.
const path = require('path');

// This plugin generates the final index.html file with the script tag for our bundle already included.
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is the main configuration object that we export for Webpack to use.
module.exports = {
  // 1. MODE
  // Sets the environment to 'development' or 'production'.
  // 'development' enables helpful tools for debugging. 'production' enables optimizations for the final build.
  mode: 'development',

  // 2. ENTRY
  // This is the starting point of our application. Webpack will begin bundling from this file.
  entry: './src/index.js',

  // 3. OUTPUT
  // This tells Webpack where to put the bundled JavaScript file and what to name it.
  output: {
    // `path.resolve` creates an absolute path to prevent issues. `__dirname` is the current directory.
    // The bundled code will be placed in a folder named 'dist'.
    path: path.resolve(__dirname, 'dist'),
    // The name of the final bundled file.
    filename: 'bundle.js',
    // This cleans the /dist folder before each build, so you don't have leftover files.
    clean: true,
  },

  // 4. LOADERS
  // Loaders allow Webpack to process files other than JavaScript and JSON.
  module: {
    rules: [
      // Rule for JavaScript and JSX files
      {
        test: /\.(js|jsx)$/, // This regex looks for files ending in .js or .jsx
        exclude: /node_modules/, // We exclude the node_modules directory for performance.
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile these files.
        },
      },
      // Rule for CSS files
      {
        test: /\.css$/, // This regex looks for files ending in .css
        // Loaders are applied in reverse order: css-loader -> style-loader
        use: [
          'style-loader', // 2. Injects the CSS into the DOM inside a <style> tag.
          'css-loader',   // 1. Reads the CSS file and resolves @import and url().
        ],
      },
      // Rule for images and other assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // 5. PLUGINS
  // Plugins are used for tasks that loaders can't do, like generating HTML or managing assets.
  plugins: [
    new HtmlWebpackPlugin({
      // It uses our existing HTML file as a template.
      template: './public/index.html',
    }),
  ],
  
  // 6. DEV SERVER
  // Configuration for the `webpack-dev-server` package.
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serves files from the 'dist' directory.
    },
    compress: true, // Enables gzip compression for everything served.
    port: 3000, // The port to run the server on.
    open: true, // Automatically opens the browser after the server starts.
    hot: true, // Enables Hot Module Replacement (HMR) for fast updates without a full page refresh.
  },

  // 7. RESOLVE (Optional but recommended)
  // This allows you to import modules without having to specify their extensions.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};