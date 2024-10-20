const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"), // 主入口文件,
  output: {
    path: path.resolve(__dirname, "../dist"), // 输出目录
    filename: "[name].[contenthash].js", // 输出文件
    clean: true, // 每次构建清理dist文件夹
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // 支持的文件扩展名
    alias: {
      // 路径别名
      "@/*": path.resolve(__dirname, "../src/"),
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 处理 TypeScript 和 TSX 文件
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i, // 处理 Sass 文件
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/, // 处理 JavaScript 和 JSX 文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 模板 HTML 文件
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // 对所有模块启用分包
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/, // 匹配 react 和 react-dom
          name: "react-vendor", // 输出的文件名
          chunks: "all",
          priority: 10, // 优先级，越大越优先分包
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd[\\/]/, // 匹配 antd
          name: "antd-vendor", // 输出的文件名
          chunks: "all",
          priority: 10,
        },
        router: {
          test: /[\\/]node_modules[\\/]react-router-dom[\\/]/, // 匹配 react-router-dom
          name: "router-vendor", // 输出的文件名
          chunks: "all",
          priority: 10,
        },
        axios: {
          test: /[\\/]node_modules[\\/]axios[\\/]/, // 匹配 axios
          name: "axios-vendor", // 输出的文件名
          chunks: "all",
          priority: 10,
        },
      },
    },
    runtimeChunk: "single", // 提取 runtime 代码
  },
  devServer: {
    static: path.join(__dirname, "../public"), // 开发服务器的静态文件目录
    compress: true, // 开启gzip压缩
    port: 8000, // 开发服务器的端口
    hot: true, // 开启热替换
  },
};
