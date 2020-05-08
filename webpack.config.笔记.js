const path = require("path");
//html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", //开发或者生产模式
  entry: "./src/index.js", //入口
  output: {
    //输出
    path: path.resolve(__dirname, "dist"), //路径
    filename: "[name].[contenthash].js", //以内容的hash来命名
  },

  //使用dev-server
  devServer: {
    contentBase: "./dist",
  },

  //使用html插件 生成html，html会自动引入js
  //会生成一个默认的index.html
  //通过传参改变html1的内容，看文档
  plugins: [
    //html插件
    new HtmlWebpackPlugin({
      title: "网站的标题",
      filename: "index.html", //输出的名字,不写就默认index.html
      template: "src/template.html", //模板
    }),
    // //css插件
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    //   chunkFilename: "[id].[contenthash].css",
    // }),
  ],

  //css-loader 的配置，暂时先这样理解
  module: {
    rules: [
      {
        //发现以.css结尾的文件名，就用css-loader读到js里，然后用style-loader把css写到style标签里
        test: /\.css$/i, //$是以什么结尾 正则
        //style-loader是把css放到style标签里

        //要么放到style标签，要么生成文件，二选一
        use: ["style-loader", "css-loader"],
        //使用插件把css抽成文件
        // use: [MiniCssExtractPlugin.loader, "css-loader"],

        //use的详细配置，看文档
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       publicPath: "/public/path/to/",
        //     },
        //   },
        //   "css-loader",
        // ],
      },
    ],
  },
};
