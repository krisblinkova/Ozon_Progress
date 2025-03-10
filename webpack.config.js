const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Для продакшена поменяйте на 'production'
  entry: './project-root/components/progress.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true, // Очищает папку вывода перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Транспиляция современного JS
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './project-root/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    open: true, // Автоматически открывает браузер
  },
  devtool: 'source-map', // Для удобства отладки в режиме разработки
  resolve: {
    extensions: ['.js', '.css'], // Опционально: позволяет импортировать файлы без указания расширения
  },
};