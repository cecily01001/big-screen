import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import './style.less';
import { nanoid } from 'nanoid';
import MyBar from '../../../components/MyBar';
import { useSelector, useDispatch } from 'react-redux';
import { addBoxes, deleteBoxes } from '../../../store/features/editorSlice';
import {getChartComp} from '../../../utils/index'

function CenterPage() {
  // const [boxes, setBoxes] = useState({});
  const boxes = useSelector(state => state.editor).boxes;
  const formOptions = useSelector(state => state.editor).common_options;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // let tempBoxs = { ...boxes };
    // delete tempBoxs[id]
    // setBoxes(tempBoxs)
    dispatch(
      deleteBoxes(id)
    )
  }

  useEffect(() => {
    let length = Object.keys(boxes).length
    if (length > 0) {
      let id = formOptions.id
      let tempBoxs = { ...boxes[id] };
      console.log(tempBoxs)
      tempBoxs.top = formOptions.translate_y;
      tempBoxs.left = formOptions.translate_x;
      tempBoxs.width = formOptions.width;
      tempBoxs.height = formOptions.height;
      // setBoxes({ ...tempBoxs });
      let temp = { [id]: tempBoxs }
      dispatch(
        addBoxes(temp)
      )
    }
  }, [formOptions]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['leftPicEle', 'trueEle'],
    drop: (item, monitor) => {
      const left = Math.round(monitor.getClientOffset().x);
      const top = Math.round(monitor.getClientOffset().y);
      const id = item.id ? item.id : nanoid();

      dispatch(
        addBoxes(
          {
            [id]: {
              top,
              left,
              chartType: item.chartType,
              // config: item.config
            }
          }
        )
      );
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
        // console.log(boxes[key])
        // const Chart = boxes[key].chart
        const chartType=boxes[key].chartType
        const Chart = getChartComp(chartType)
        // const config = boxes[key].config
        const { left, top, width, height } = boxes[key];
        return (
          <MyBar key={key} chartType={chartType} id={key} left={left} top={top} width={width} height={height} handleDelete={handleDelete} >
            <Chart width={width} height={height} />
          </MyBar>
        );
      })}
    </div>
  );
}

export default CenterPage;
