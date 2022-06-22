/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import * as echarts from 'echarts';
import './style.less';
import { nanoid } from 'nanoid';
import MyBar from '../../../components/MyBar';

function CenterPage(props) {
  // const [options, setOptions] = useState(null);
  const [boxes, setBoxes] = useState({});

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['ele-bar', 'ele-line', 'trueEle'],
    drop: (item, monitor) => {
      const left = Math.round(monitor.getClientOffset().x);
      const top = Math.round(monitor.getClientOffset().y);
      const id = item.id ? item.id : nanoid();
      const tempBoxs = boxes;
      tempBoxs[id] = {
        top, left, options: item.options,
      };
      setBoxes(tempBoxs);
      // setOptions(item.options);
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
        const { left, top, options } = boxes[key];
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
