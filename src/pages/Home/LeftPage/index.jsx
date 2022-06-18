/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};
const LeftPage = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'leftEle',
    item: { name: props.name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box" />
  );
};

export default LeftPage;
