import React, { useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import * as echarts from 'echarts';
import './style.less';
import { nanoid } from 'nanoid';
import MyBar from '../../../components/MyBar';
import { useDispatch, useSelector } from 'react-redux';

function CenterPage(props) {
  const [boxes, setBoxes] = useState({});
  const formOptions = useSelector(state => state.editor).formOptions;

  useEffect(() => {
    const tempBoxs = boxes;
    console.log(boxes)
    let length=Object.keys(boxes).length
    if(length>0){
      tempBoxs[formOptions.id].top = formOptions.translate_y;
      tempBoxs[formOptions.id].left = formOptions.translate_x;
      setBoxes(tempBoxs);
    }
  }, [formOptions]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['ele-bar', 'ele-line', 'trueEle'],
    drop: (item, monitor) => {
      const left = Math.round(monitor.getClientOffset().x);
      const top = Math.round(monitor.getClientOffset().y);
      const id = item.id ? item.id : nanoid();
      const tempBoxs = boxes;
      tempBoxs[id] = {
        top,
        left,
        options: item.options
      };
      setBoxes(tempBoxs);
      return {};
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  const isActive = canDrop && isOver;

  const handleChartClick = (id, boxes) => {
    console.log('box');
    console.log(boxes[id]);
  };

  return (
    <div className='huabu' ref={drop} data-testid='dustbin'>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {/* <div className="center_container" ref={chartRef} /> */}
      {Object.keys(boxes).map(key => {
        const { left, top, options } = boxes[key];
        return (
          <MyBar key={key} id={key} left={left} top={top} options={options} />
        );
      })}
    </div>
  );
}

export default CenterPage;
