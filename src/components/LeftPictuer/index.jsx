import { useDrag } from 'react-dnd';
import React from 'react';

const LeftPicture = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: props.name,
    item: {
      id: undefined,
      chartType: props.item.type
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className="every_element" ref={drag} style={{ opacity }} data-testid="box">
      <img src={props.item.source} alt="" />
    </div>
  );
};

export default LeftPicture;
