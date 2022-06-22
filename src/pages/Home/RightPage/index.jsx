/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.less';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const RightPage = () => (
  <div className="right_content">
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="样式" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="数据" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="交互" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default RightPage;
