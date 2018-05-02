import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {Menu, Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;


const HomePage = prop =>{ return (
      <div className="MainPage">
      <Layout>
       <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>

         <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
                    <Icon type="user" />
                      <span className="nav-text">Profile Settings</span>
          </Menu.Item>
         </Menu>
       </Sider>
       <Layout style={{ marginLeft: 200 }}>
       <span className="MainPage-header">
       </span>
         <Content className="MainPage-content" style={{ margin: '24px 16px 0', overflow: 'initial' }}>
           <div style={{ padding: 24, background: '#0000', textAlign: 'center' }}>
            <Button type="primary"></Button>
           </div>
         </Content>



       </Layout>
      </Layout>

        </div>
    );
  }
export default HomePage
