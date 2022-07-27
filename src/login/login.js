import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input , Alert} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import axios from 'axios';

const App = () => {
  const onFinish = (values) => {
    var url = 'http://127.0.0.1:7001/login';
    var uid = values.username;
    var password = values.password;
    var remember = values.remember;
    //console.log('uid: ' + uid + ', password: ' + password + ',remember: ' + remember)
    url = url + '/' + uid + '/' + password;
    console.log(url)
    axios.get(url).then((res) => {
      if(res.data){
        setTimeout("javascript:location.href='/home'", 500);
      }
      
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
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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