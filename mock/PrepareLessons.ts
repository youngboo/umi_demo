export default {
  'GET /api/prepare': [
    {
      name: 'app1',
      entry: 'http://localhost:8001/app1',
      base: '/app1',
      mountElementId: 'root-subapp-container',
    },
    {
      name: 'app2',
      entry: 'http://localhost:8002/app2',
      base: '/app2',
      mountElementId: 'root-subapp-container',
      props: {
        testProp: 'test',
      },
    },
    {
      name: 'app3',
      entry: 'http://localhost:8003/app3',
      base: '/app3/:abc',
      mountElementId: 'root-subapp-container',
    },
    {
      name: 'react15',
      entry: 'http://localhost:7102',
      base: '/react15',
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
};
