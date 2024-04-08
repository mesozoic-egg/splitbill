module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'index.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: 'babel-loader',
      },
    ],
  },
};

