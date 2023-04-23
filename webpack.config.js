const path = require('path');

module.exports = {
  entry: {
    index: './src/prosemirror.js'
  },
  plugins: [],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // 只会打包生成用到的文件 清理不需要的文件
  },
  resolve: {
    extensions: ['js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
