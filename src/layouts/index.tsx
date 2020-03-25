import { Breadcrumb, Layout, Menu } from 'antd';
import { connect } from 'umi';
import React from 'react';
import { Link } from 'umi';
import style from './style.less';
import {
  SettingDrawer,
  MenuDataItem,
  PageLoading,
} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import MyIcon from '@/components/MyIcon';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Footer } = Layout;

const renderBreadCrumb = (pathname: string) => {
  let arr = pathname.split('/').slice(1);
  if (arr[0] === '') {
    arr[0] = 'Home';
  }
  return (
    <Breadcrumb className={style.breadcrumb}>
      {arr.map(name => {
        return <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

class Layouts extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    const { dispatch } = props;
    dispatch({
      type: 'base/getApps',
    });
  }

  render() {
    const { location, children, base } = this.props;
    console.log(base, 'base');
    const { name } = base;
    const selectKey = '/' + location.pathname.split('/')[1];
    let { apps } = base;
    if (!apps) {
      apps = [];
    }
    apps = apps.concat([
      {
        name: 'prepare',
        base: '/prepare',
      },
    ]);
    // const Menuapps = [
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
    //   },
    //   {
    //     name: 'prepare',
    //     base: '/prepare',
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
    // ];
    return (
      // <ProLayout
      //   title="后台管理"
      //   layout="topmenu"
      //   logo={() => <MyIcon type="icon-zykj" style={{ fontSize: 20 }} />}
      //   fixSiderbar={false}
      //   menuDataRender={(menuData: MenuDataItem[]) => {
      //     console.log(menuData, 'menuData');
      //     return apps
      //       ? apps.map((m: any) => {
      //           return { name: m.name, path: m.base, key: m.name };
      //         })
      //       : [];
      //   }}
      //   footerRender={() => (
      //     <Footer className={style.footer}>
      //       Ant Design ©2019 Created by Ant UED
      //     </Footer>
      //   )}
      // >
      //   <Content className={style.content}>
      //     {renderBreadCrumb(location.pathname)}
      //     {// 加载master pages，此处判断较为简单，实际需排除所有子应用base打头的路径
      //     selectKey === '/' || selectKey === '/prepare' ? children : null}
      //     {apps && apps.length ? <div id="root-subapp-container" /> : null}
      //     <SettingDrawer
      //     onSettingChange={() => {}}
      //     />
      //   </Content>
      // </ProLayout>

      <Layout>
        <Header>
          <div className={style.logo}>{name}</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[selectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            {apps &&
              apps.length > 0 &&
              apps.map((app: any, index: number) => {
                return app.children ? (
                  app.children.map((c: any) => (
                    <Menu.Item key={c.base}>
                      <Link to={c.base}>{c.name}</Link>
                    </Menu.Item>
                  ))
                ) : (
                  <Menu.Item key={app.base}>
                    <Link to={app.base}>{app.name}</Link>{' '}
                  </Menu.Item>
                );
              })}
          </Menu>
        </Header>
        <Content className={style.content}>
          {renderBreadCrumb(location.pathname)}
          {// 加载master pages，此处判断较为简单，实际需排除所有子应用base打头的路径
          selectKey === '/' || selectKey === '/prepare' ? children : null}
          {apps && apps.length ? <div id="root-subapp-container" /> : null}
          <SettingDrawer />
        </Content>
        <Footer className={style.footer}>
          Ant Design ©2019 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
export default connect<{}, {}, any>((base: any) => base)(Layouts);
