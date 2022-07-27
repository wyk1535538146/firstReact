import { UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Space, Table, Tag, Row, Col, Avatar , Button} from 'antd';
import React, { useEffect, useState} from 'react';
import './home.css'
import axios from 'axios';



const columns = [
  {
    title: 'nickname',
    dataIndex: 'nickname',
    key: 'nickname',
    align: 'center',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    align: 'center',
  },
  {
    title: 'password',
    dataIndex: 'password',
    key: 'password',
    align: 'center',
  },
  {
    title: 'Action',
    key: 'action',
    align: 'center',
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" danger>禁用</Button>
        <Button type='primary' disabled='true'>恢复</Button>
      </Space>
    ),
  },
];


const App = () => {

    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:7001/home').then(({data}) => {
            setUserList(data);
            console.log(data);
        })
    },[])

    return(
        <>
        <div className='bg'>
            <div className='head'>
                <Row align='middle'>
                    <Col span={1} offset={22}>
                        <Avatar icon={<UserOutlined />} />
                    </Col>
                    <Col span={1}>
                        <a href=''>注销</a>
                    </Col>
                </Row>
                <br />
            </div>


            <Table columns={columns} dataSource={userList} />
        </div>
        </>
    );
    
}

export default App;