export default {
  // namespace: 'base',

  state: {
    userId: 'Qiankun',
    role: [],
  },

  // effects: {
  //   *getApps(_: any, { put }: any) {
  //     /*
  //      子应用配置信息获取分同步、异步两种方式
  //      同步有两种配置方式，1、app.js导出qiankun对象，2、配置写在umi配置文件中，可通过import @tmp/subAppsConfig获取
  //     */
  //     console.log('waiting for qiankun start');
  //     yield sleep(1000);

  //     const apps = yield query();
  //     console.log(apps, 'apps');
  //     yield put({
  //       type: 'getAppsSuccess',
  //       payload: {
  //         apps,
  //       },
  //     });

  //     // 模拟手动控制 qiankun 启动时机的场景, 需要 defer 配置为 true
  //     setTimeout(qiankunStart, 200);
  //   },
  // },

  reducers: {
    getAppsSuccess(state: { apps: any }, { payload }: any) {
      state.apps = payload.apps;
    },
  },
};
