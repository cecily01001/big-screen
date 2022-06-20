/* eslint-disable no-unused-vars */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import * as echarts from 'echarts';
import './style.less';
import MyBar from '../../../components/MyBar';

function CenterPage(props) {
  const [options, setOptions] = useState(null);
  const [boxes, setBoxes] = useState({
    a: {
      id: 1, top: 20, left: 80,
    },
  });

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [boxes, setBoxes],
  );

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['ele1'],
    drop: (item, monitor) => {
      // const delta = monitor.getDifferenceFromInitialOffset();
      // const left = Math.round(monitor.getInitialClientOffset().x + delta.x);
      // const top = Math.round(monitor.getInitialClientOffset().y + delta.y);
      const left = Math.round(monitor.getClientOffset().x);
      const top = Math.round(monitor.getClientOffset().y);
      setBoxes({
        a: {
          id: 1, top, left,
        },
      });
      setOptions(item.options);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  // const chartRef = useRef(null);

  // useEffect(() => {
  //   if (chartRef.current && options) {
  //     const chartInstance = echarts.init(chartRef.current);
  //     chartInstance.setOption(options);
  //   }
  // }, [options]);

  return (
    <div className="huabu" ref={drop} data-testid="dustbin">
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {/* <div className="center_container" ref={chartRef} /> */}
      {Object.keys(boxes).map((key) => {
        const { left, top } = boxes[key];
        return (
          <MyBar
            key={key}
            id={key}
            left={left}
            top={top}
            options={options}
          />
        );
      })}
    </div>
  );
}

export default CenterPage;
