const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist') // Diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpilar arquivos .js usando Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, // Carregar arquivos .css
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};