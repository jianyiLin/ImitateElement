const isProd = process.env.NODE_ENV === "production";
let UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const Happypack = require("happypack");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  parallel: false,
  configureWebpack: (config) => {
    config.plugins.push(new HardSourceWebpackPlugin());
    // 多线程优化构建速度
    config.plugins.push(
      new Happypack({
        loaders: ["babel-loader", "vue-loader", "url-loader"],
        cache: true,
        threads: 3, // 线程数取决于你电脑性能的好坏，好的电脑建议开更多线程
      })
    );
    // if (isProd) {
    //   // externals里的模块不打包
    //   config.externals = {
    //     vue: "Vue",
    //   };
    // }

    config.module.rules.push({
      test: /\.vue$/,
      use: [
        {
          loader: "./plugins/source-loader.js", // 解决ivew组件 忽略前缀i的问题
          options: {
            // prefix: false,
          },
        },
      ],
    });
    /* js 压缩 */
    if (isProd) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            uglifyOptions: {
              compress: {
                drop_debugger: true,
                drop_console: true, // 生产环境自动删除console
              },
              warnings: false,
            },
            sourceMap: false,
            parallel: true, // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
          },
        })
      );
    }
    if (isProd) {
      return {
        // 开启分离 js
        optimization: {
          runtimeChunk: "single",
          splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 20000,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                  // get the name. E.g. node_modules/packageName/not/this/part.js
                  // or node_modules/packageName
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  // npm package names are URL-safe, but some servers don't like @ symbols
                  return `npm.${packageName.replace("@", "")}`;
                },
              },
            },
          },
        },
      };
    }
  },
  chainWebpack: (config) => {
    if (isProd) {
      config.optimization
        .minimizer("css")
        .use(OptimizeCSSAssetsPlugin, [
          { cssProcessorOptions: { safe: true } },
        ]);
      config.plugin("compression").use(CompressionWebpackPlugin, [
        {
          filename: "[path][base].gz",
          algorithm: "gzip",
          test: /\.js$|\.ts$|\.css$|\.html$/,
          minRatio: 0.8,
          deleteOriginalAssets: true,
        },
      ]);
    }
    // config
    //   .plugin("webpack-bundle-analyzer")
    //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
      });
    // 压缩图片插件
    if (isProd) {
      config.module
        .rule("images")
        /* 注意会报这个错误 Cannot find module 'imagemin-gifsicle' 需要下载cnpm install --save-dev image-webpack-loader 才有效*/
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.8, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
          webp: { quality: 75 },
        });
    }
    //视为一个外部库，而不将它打包进来
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style.scss";`,
      },
    },
  },
  pages: {
    //配置多页面入口
    index: {
      // entry: 'src2/main.js',
      entry: "./src/main.js",
      //当有多行是，VUE以最后一行entry为准。
      // template: 'public/home.html',
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
  },
};
