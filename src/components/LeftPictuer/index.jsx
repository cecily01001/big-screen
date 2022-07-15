import { useDrag } from 'react-dnd';
import React, { useEffect } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend'

const LeftPicture = (props) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: props.name,
    item: {
      id: undefined,
      chartType: props.item.type,
      img: props.item.source
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])
  // const opacity = isDragging ? 0 : 1;
  return (
    <div className="every_element" ref={drag}  data-testid="box">
      <img src={props.item.source} alt="" />
    </div>
  );
};

export default LeftPicture;
