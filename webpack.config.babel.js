import { resolve } from 'path'

export default {
  mode: 'production',
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: __dirname,
    filename: 'rmwc-fabmenu.min.js',
    libraryTarget: 'umd', // 'commonjs2'
    library: 'FabMenu'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  externals: {
    'react': 'React',
    'rmwc/Fab': 'RMWC'
  }
}
