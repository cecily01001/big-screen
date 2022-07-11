import React from 'react';
const { Panel } = Collapse;
import {
  FileAddOutlined, ReconciliationOutlined, AppstoreAddOutlined, ShopOutlined,
  DesktopOutlined
} from '@ant-design/icons';
import { Button, Divider, Menu, Switch, Collapse } from 'antd';
import './style.less'
import { useParams, withRouter, useLocation } from 'react-router-dom'

const MenuOwn = (props) => {
  
  const handleClick = (key) => {
    props.history.push('/design')
  };
  const pane = (icon, text) => (
    <div>
      {icon}
      {text}
    </div>
  );
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('全部项目', '1', <DesktopOutlined />),
    getItem('我的模板', '2', <AppstoreAddOutlined />),
  ];

  return (
    <div className='mymenu'>

      <div className='add'>
        <Button onClick={handleClick} type="primary" icon={<FileAddOutlined />} ghost>
          新建
        </Button>
      </div>

      <Divider />

      <Collapse defaultActiveKey={['1']}>
        <Panel header={pane(<ReconciliationOutlined />, '项目')} key="1">
          <p className='label'>我的</p>
          <Menu
            // onClick={handleClick}
            mode="inline"
            theme="dark" // 黑色主题
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items}
          >
          </Menu>
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        {/* <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel>
        <Panel header={pane(<ShopOutlined />, '模板市场')} key="2">
        </Panel> */}
      </Collapse>

      <Divider />
    </div >
    
  );
}

export default withRouter(MenuOwn)