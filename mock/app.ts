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
      name: 'react16',
      entry: 'http://localhost:7100',
      base: '/react16',
      mountElementId: 'root-subapp-container',
    },
    {
      name: 'prepare',
      base: '/prepare',
    },
    {
      name: 'about',
      base: '/about',
    },
  ],

  // [
  //   {
  //     name: 'app1',
  //     entry: 'http://localhost:8001/app1',
  //     base: '/app1',
  //     mountElementId: 'root-subapp-container',
  //   },
  //   {
  //     name: 'app2',
  //     entry: 'http://localhost:8002/app2',
  //     base: '/app2',
  //     mountElementId: 'root-subapp-container',
  //     props: {
  //       testProp: 'test',
  //     },
  //   },
  //   {
  //     name: 'app3',
  //     entry: 'http://localhost:8003/app3',
  //     base: '/app3/:abc',
  //     mountElementId: 'root-subapp-container',
  //   },
  //   {
  //     name: 'react15',
  //     entry: 'http://localhost:7102',
  //     base: '/react15',
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

  'GET /api/config': {
    theme: 'dark',
    userId: 2,
    role: 'admin',
  },
};
