import React, { memo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import './style.less';

function Home() {
  return (
    <div className='main'>
      <DndProvider backend={HTML5Backend}>
        <div className='left_content'>
          <LeftPage />
        </div>
        <div className='center_content'>
          <CenterPage />
        </div>
        <div className='right_content'>
          <RightPage />
        </div>
      </DndProvider>
    </div>
  );
}

export default memo(Home);
