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
        <Button danger type='default'  disabled={record.disabled === '1' ? true : false} onClick={() => {
            axios.get('http://127.0.0.1:7001/disable/' + record.email).then((res) => {
              if(res.data) window.location.reload();
              else console.log("error")
            })}}>禁用</Button>

        <Button type='primary' disabled={record.disabled === '0' ? true : false} 
          onClick={() => {
            axios.get('http://127.0.0.1:7001/unDisable/' + record.email).then((res) => {
              if(res.data) window.location.reload();
              else console.log("error")
            })}}>恢复</Button>
      </Space>
    ),
  },
];


const App = () => {

  // hook 不是特别懂
  // 后台获取数据放到userlist中
  const [userList, setUserList] = useState([]);
  useEffect(() => {
      axios.get('http://127.0.0.1:7001/home').then(({data}) => {         //这里的{data}相当于res.data
        setUserList(data);
      })
  },[])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return(
      <>
      <div className='bg'>
        <div className='head'>
          <Row align='middle'>
            <Col span={1} offset={22}>
              <Avatar icon={<UserOutlined />} />
            </Col>
            <Col span={1}>
              <a href='' onClick={() => {
                localStorage.clear();
              }}>注销</a>
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