import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import './style.less';
import { nanoid } from 'nanoid';
import MyBar from '../../../components/MyBar';
import { useSelector } from 'react-redux';

function CenterPage() {
  const [boxes, setBoxes] = useState({});
  const formOptions = useSelector(state => state.editor).common_options;

  const handleDelete = (id) => {
    let tempBoxs = { ...boxes };
    delete tempBoxs[id]
    setBoxes(tempBoxs)
  }

  useEffect(() => {
    let tempBoxs = boxes;
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
    accept: ['leftPicEle', 'trueEle'],
    drop: (item, monitor) => {
      const left = Math.round(monitor.getClientOffset().x);
      const top = Math.round(monitor.getClientOffset().y);
      const id = item.id ? item.id : nanoid();

      setBoxes(Object.assign({}, boxes, {
        [id]: {
          top,
          left,
          chart: item.chart,
          config: item.config,
        }
      }));
      return {};
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }), [boxes]);

  const isActive = canDrop && isOver;

  return (
    <div className='huabu' ref={drop} data-testid='dustbin'>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {Object.keys(boxes).map(key => {
        console.log(boxes[key])
        const Chart = boxes[key].chart
        const config = boxes[key].config
        const { left, top, width, height } = boxes[key];
        return (
          <MyBar key={key} chart={Chart} config={config} id={key} left={left} top={top} width={width} height={height} handleDelete={handleDelete} >
            <Chart width={width} height={height} />
          </MyBar>
        );
      })}
    </div>
  );
}

export default CenterPage;
