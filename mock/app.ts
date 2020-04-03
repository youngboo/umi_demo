export default {
  'GET /api/apps': [
    {
      name: 'vue',
      entry: 'http://localhost:7101',
      base: '/vue',
      mountElementId: 'root-subapp-container',
      // children: [
      //   {
      //     name: 'vueAbout',
      //     base: '/vue/about',
      //     mountElementId: 'root-subapp-container',
      //   },
      // ],
    },
    {
      name: 'abp-zero-template',
      entry: 'http://localhost:4200',
      base: '/abp-zero-template',
      mountElementId: 'root-subapp-container',
    },
    {
      name: 'react16',
      entry: 'http://localhost:7100',
      base: '/react16',
      mountElementId: 'root-subapp-container',
    },
    // {
    //   name: 'sub-app-1',
    //   entry: 'http://localhost:8801',
    //   base: '/sub-app-1',
    //   mountElementId: 'root-subapp-container',
    // },
  ],

  'GET /api/config': {
    theme: 'dark',
    userId: 2,
    role: 'admin',
    userName: 'super',
  },
  '/api/userInfo': {
    id: 2,
    role: 'admin',
    userName: 'super',
  },
};
