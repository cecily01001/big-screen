import React from 'react'
import './style.less'
import person from '../../../assets/images/person.png';
import { Button, Divider, Popover } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const content = (
  <div>
    <p><img src={person} alt=""></img>Cecily</p>
    <Divider />
    <div>
      <LogoutOutlined />
      <div className='popover-text'>退出登录</div>
    </div>
  </div>
);

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='login'>
        <Popover content={content} title="">
          <img src={person} alt=""></img>
        </Popover>
      </div>
    </div>
  )
}

export default TopBar