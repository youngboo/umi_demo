import request from './services/request';

// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = request('/apps').then((apps: any) => ({
  // 注册子应用信息
  apps: apps.map((a: any) => {
    return {
      ...a,
      props: {
        theme: 'dark',
        ...apps,
      },
    };
  }),
  jsSandbox: true, // 是否启用 js 沙箱，默认为 false
  prefetch: true, // 是否启用 prefetch 特性，默认为 true
  lifeCycles: {
    // see https://github.com/umijs/qiankun#registermicroapps
    afterMount: (props: any) => {
      // console.log(props, 'props');
    },
  },
  // ...even more options qiankun start() supported, see https://github.com/umijs/qiankun#start
}));
export async function getInitialState() {
  const data = await request('/config');
  return data;
}
// export const locale = {
//   setLocale({ lang, realReload, updater }) {
//     history.push(`/?locale=${lang}`);
//     updater();
//   }
// }
