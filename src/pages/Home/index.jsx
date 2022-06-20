import React, { memo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import './style.less';

function Home() {
  return (
    <div className="main">
      <DndProvider backend={HTML5Backend}>
        <LeftPage className="left_content" />
        <CenterPage className="center_content" />
        <RightPage className="right_content" />
      </DndProvider>
    </div>
  );
}

export default memo(Home);
