import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './LoginPage.css';
import {Menu, Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;



const LoginPage = () =>{
  return(
    <div className="App">
     <Layout>
       <Header className="app-header">
         <span className="header1">
         </span>
       </Header>
       <Content className="app-content">
       <Row gutter={24}>
         <Col span={12}>
         <h2></h2>

         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit arcu, eget consequat magna. Donec vestibulum id dolor ac ullamcorper. Donec sodales pulvinar erat. Suspendisse tristique commodo est id vulputate. Pellentesque lobortis mauris ipsum, quis dictum nunc posuere ut. Etiam sed velit ut justo dictum ultrices. Nullam quis viverra justo.</Col>
         <Col span={12}>
         <div>
             <Input id="login-input" className="login-input" style={{background:'#03C682'}} prefix={<Icon type="user" style={{ color: '#03C682' }} />} placeholder="Username" style={{ width: '200px' }}></Input>
             </div>

             <div>
               <FormItem>
                   <Input id="password-input" className="password-input" prefix={<Icon type="lock" style={{ color: '#03C682'}} />} type="password" placeholder="Password" style={{ width: '200px'}} />
               </FormItem>
             </div>
             <div>
               <FormItem>
                 <Button id="login-button" style={{background:'#03C682'}} type="primary" htmlType="submit" className="login-form-button">
                   Log in
                 </Button>
                 <a id="regiser-a" style={{color: '#03C682'}} href="">&nbsp;&nbsp;&nbsp;Register now!</a><h1></h1>
                 <Checkbox style={{color: '#03C682'}}>Remember me</Checkbox>
                 <a id="forgot-a" style={{color: '#03C682'}} className="login-form-forgot" href="">Forgot password</a>
               </FormItem>
             </div></Col>
       </Row>  <div>

         </div>


       </Content>
       <Footer className="App-footer">
         <div>
           <Row className="footer-font" type="flex">
             <Col span={13} justify="space-around" ></Col>
             <Col justify="space-around" >Projekt zostal utworzony na MFI XI</Col>
           </Row>
         </div>

       </Footer>


     </Layout>
     </div>
  );
}

export default LoginPage;
