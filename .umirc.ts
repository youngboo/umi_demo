import { defineConfig } from 'umi';

export default defineConfig({
  // plugins: ['umi-plugin-dva'],
  // layout: {
  //   name: 'Ant Design',
  //   locale: true,
  //   menu: { name: 'aa' },
  //   layout: 'topmenu',
  // },
  // routes: [
  //   {
  //     path: '/',
  //     component: '@/pages/index',
  //     name: '首页',
  //   },
  //   { path: '/prepare', component: '@/pages/prepare', name: '备课' },
  // ],
  qiankun: {
    master: {
      defer: true,
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
      apps: [
        {
          name: 'app1',
          entry: 'http://localhost:8001/app1',
          base: '/app1',
          mountElementId: 'root-subapp-container',
        },
        {
          name: 'vue',
          entry: 'http://localhost:7101',
          base: '/vue',
          mountElementId: 'root-subapp-container',
        },
        {
          name: 'school-website',
          entry: 'http://localhost:8081',
          base: '/school',
          mountElementId: 'root-subapp-container',
        },
      ],
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
});
