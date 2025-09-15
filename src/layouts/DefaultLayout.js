import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet, useLocation } from 'react-router';

const { Header, Content, Footer } = Layout;

const menuItems = [
  { key: '/', label: <NavLink to="/">Home</NavLink> },
  { key: '/done', label: <NavLink to="/done">Done List</NavLink> },
  { key: '/aboutus', label: <NavLink to="/aboutus">About Us</NavLink> }
];

function DefaultLayout() {
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export { DefaultLayout };
