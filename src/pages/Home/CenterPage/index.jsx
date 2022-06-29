import React, { useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import * as echarts from 'echarts';
import './style.less';
import { nanoid } from 'nanoid';
import MyBar from '../../../components/MyBar';
import { useDispatch, useSelector } from 'react-redux';
import PublicRightClick from '../../../components/PublicRightClick';

function CenterPage() {
  const [boxes, setBoxes] = useState({});
  const formOptions = useSelector(state => state.editor).formOptions;

  const handleDelete = (id) => {
    // let tempBoxs = boxes;
    // delete tempBoxs[id]
    // setBoxes({...tempBoxs})
    // console.log(boxes)
    let tempBoxs = {...boxes};
    delete tempBoxs[id]
    // console.log(tempBoxs)
    setBoxes(tempBoxs)
  }

  useEffect(() => {
    let tempBoxs = boxes;
    // console.log(boxes)
    let length = Object.keys(boxes).length
    if (length > 0) {
      tempBoxs[formOptions.id].top = formOptions.translate_y;
      tempBoxs[formOptions.id].left = formOptions.translate_x;
      tempBoxs[formOptions.id].width = formOptions.width;
      tempBoxs[formOptions.id].height = formOptions.height;
      setBoxes({ ...tempBoxs });
    }
  }, [formOptions]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['ele-bar', 'ele-line', 'trueEle'],
    drop: (item, monitor) => {
      const left = Math.round(monitor.getClientOffset().x);
      const top = Math.round(monitor.getClientOffset().y);
      const id = item.id ? item.id : nanoid();
      console.log(boxes)
      let tempBoxs = {...boxes};
      tempBoxs[id] = {
        top,
        left,
        options: item.options
      };
      console.log(tempBoxs)
      setBoxes(tempBoxs);
      console.log(boxes)
      return {};
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }),[boxes]);

  const isActive = canDrop && isOver;

  return (
    <div className='huabu' ref={drop} data-testid='dustbin'>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {/* <div className="center_container" ref={chartRef} /> */}

      {Object.keys(boxes).map(key => {
        const { left, top, width, height, options } = boxes[key];
        return (
            <MyBar key={key} id={key} left={left} top={top} options={options} width={width} height={height} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default CenterPage;
