const path = require('path');

module.exports = [{
    entry: './src/EmailsEditor/EmailsEditor.ts',
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/
        },
        { 
          enforce: "pre", 
          test: /\.js$/, 
          loader: "source-map-loader" 
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'emails-editor.js',
      path: path.resolve(__dirname, 'emails-editor/umd'),
      library: 'EmailsEditor',
      libraryExport: 'default',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
  }, {
    entry: './src/app/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }];