import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import axios from 'axios';

const App = () => {
  const onFinish = (values) => {
    var url = 'http://127.0.0.1:7001/login';
    var email = values.email;
    var password = values.password;
    url = url + '/' + email + '/' + password;
    //console.log(url)
    axios.get(url).then((res) => {
      console.log(res)
      if(res.data.status == 401) {javascript:alert('账号密码错误！');return;}
      if(res.data.status == 403) {javascript:alert('登录频繁请稍后再试！');return;}
      if(res.data.status == 405) {javascript:alert('用户被禁用~');return;}
      localStorage.setItem("login", "true");
      localStorage.setItem("user", email);
      setTimeout("javascript:location.href='/home'", 500);
      
    })
    
  };
  

  return (
    <div className='loginDiv'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        action= ""
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="../register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;