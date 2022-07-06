/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import { useDrag } from 'react-dnd';
import React from 'react';
import './style.less';

const LeftPicture = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: props.name,
    item: {
      id: undefined,
      chart: props.item.chart,
      config: props.item.config,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className="every_element" ref={drag} style={{ opacity }} data-testid="box">
      <img src={props.item.img} alt="" />
    </div>
  );
};

export default LeftPicture;
