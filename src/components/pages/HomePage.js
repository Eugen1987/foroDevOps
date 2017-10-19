import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Rate } from 'antd';
import Maintable from '../tables/MainTable';
import MainMenu from '../menus/MainMenu';
import SideRightMenu from '../menus/SideRightMenu';

const { Header, Footer, Sider, Content } = Layout;
const HomePage = () => (
  <Layout style={{ height: '100vh' }}>
    <Header>
      <MainMenu />
      <hr color="orange" />
    </Header>
    <Layout>
      <Content>
        <Maintable />
      </Content>
      <Sider width="300" style={{ color: 'red' }}>
        <SideRightMenu />
      </Sider>
    </Layout>
    <Footer>
      <Rate disabled defaultValue={2} />
    </Footer>
  </Layout>
);

export default HomePage;
