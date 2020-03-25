import { defineConfig } from 'umi';

export default defineConfig({
  // antd: {
  //   dark: true,
  //   // compact: true,
  // },
  // plugins: ['umi-plugin-dva'],
  // layout: {
  //   name: 'Ant Design',
  //   locale: true,
  //   layout: 'topmenu',
  //   fixedHeader: 'false',
  //   theme: 'pro',
  // },
  antd: {},
  // routes: [
  //   {
  //     path: '/',
  //     component: '@/pages/index',
  //     name: '首页',
  //   },
  //   { path: '/prepare', component: '@/pages/prepare', name: '备课' },
  //   { path: '/vue', exact: true, component: 'subAppContainer', name: 'vue' },
  //   { path: '/app2', exact: true, component: 'subAppContainer', name: 'app2' },
  // ],
  // routes: [
  //   { path: '/vue', exact: true, component: 'subAppContainer', name: 'vue' },
  //   { path: '/app2', exact: true, component: 'subAppContainer', name: 'app2' },
  // ],

  mock: {},
  qiankun: {
    master: {
      defer: true,
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
      // apps: [
      //   {
      //     name: 'app1',
      //     entry: 'http://localhost:8001/app1',
      //     base: '/app1',
      //     mountElementId: 'root-subapp-container',
      //   },
      //   {
      //     name: 'vue',
      //     entry: 'http://localhost:7101',
      //     base: '/vue',
      //     mountElementId: 'root-subapp-container',
      //   },
      //   {
      //     name: 'school-website',
      //     entry: 'http://localhost:8081',
      //     base: '/school',
      //     mountElementId: 'root-subapp-container',
      //   },
      // ],
    },
  },
  // presets:[],
  dva: {
    immer: true,
    hmr: true,
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  // chunks: ['vendors', 'umi'],
  // chainWebpack: function(config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     },
  //   });
  // },
  analytics: {
    baidu: '0faf5e1b54984d746245c6ea7859ff97',
  },
  // plugins: [
  //   [
  //     'umi-plugin-antd-theme',
  //     {
  //       theme: [
  //         {
  //           fileName: 'theme1.css',
  //           key: 'theme1',
  //           modifyVars: {
  //             '@primary-color': '#13C2C2',
  //             '@menu-dark-color': '#324444',
  //             '@menu-dark-bg': '#5A5A5A',
  //           },
  //         },
  //         {
  //           fileName: 'theme2.css',
  //           key: 'theme2',
  //           modifyVars: {
  //             '@primary-color': '#4992BF',
  //             '@menu-dark-color': '#9B9B9B',
  //             '@menu-dark-bg': '#3A3A3A',
  //           },
  //         },
  //       ],
  //       // 是否压缩css
  //       min: true,
  //       // css module
  //       isModule: true,
  //       // 忽略 antd 的依赖
  //       ignoreAntd: false,
  //       // 忽略 pro-layout
  //       ignoreProLayout: false,
  //       // 不使用缓存
  //       cache: true,
  //     },
  //   ],
  // ],
});
