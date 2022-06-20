/* eslint-disable react/function-component-definition */
import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};
const MyBar = (props) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'leftEle',
      item: { props.id, props.left, props.top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div
      className="box"
      ref={drag}
      style={{ ...style, left, top }}
      data-testid="box"
    >
      {children}
    </div>
  );
};
export default MyBar;
