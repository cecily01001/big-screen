import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CenterPage from './CenterPage';
import LeftPage from './LeftPage';

function Home() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <LeftPage name="Glass" />
        <CenterPage />
      </DndProvider>

    </div>
  );
}

export default Home;
