/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import * as echarts from 'echarts';
import './style.less';

const MyBar = (props) => {
  // const [{ isDragging }, drag] = useDrag(
  //   () => ({
  //     type: 'leftEle',
  //     item: { id: props.id, left: props.left, top: props.top },
  //     collect: (monitor) => ({
  //       isDragging: monitor.isDragging(),
  //     }),
  //   }),
  //   [id, left, top],
  // );
  // if (isDragging && hideSourceOnDrag) {
  //   return <div ref={drag} />;
  // }
  const [options, setOptions] = useState(null);
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
