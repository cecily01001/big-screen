import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import './style.less';
import { nanoid } from 'nanoid';
import MyBar from '../../../components/MyBar';
import { useSelector, useDispatch } from 'react-redux';
import { addBoxes, deleteBoxes } from '../../../store/features/editorSlice';
import { getChartComp } from '../../../utils/index'
import Ruler from '../../../components/Ruler/Ruler';
import { useRef } from 'react';

function CenterPage() {
  // const [boxes, setBoxes] = useState({});
  const boxes = useSelector(state => state.editor).boxes;
  const formOptions = useSelector(state => state.editor).common_options;
  const dispatch = useDispatch();

  const rulerRef = useRef()
  const horizontalRulerRef = useRef()
  const verticalRulerRef = useRef()

  const [lineOffset, setLineOffset] = useState(0)
  const [direction, setDirection] = useState(0) // 1代表鼠标悬浮在横向ruler，2代表鼠标悬浮在纵向ruler

  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)

  function getItemStyles(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
      return {
        display: 'none',
      }
    }
    let { x, y } = currentOffset
    // console.log(currentOffset)
    const transform = `translate(${x}px, ${y}px)`
    return {
      transform,
    }
  }

  const handleDelete = (id) => {
    dispatch(
      deleteBoxes(id)
    )
  }

  useEffect(() => {
    const ruler = rulerRef.current.getBoundingClientRect()
    setContainerWidth(ruler.width)
    setContainerHeight(ruler.height)

    const handleMouseover0 = (e) => {
      setLineOffset(e.offsetX)
      setDirection(1)
    }

    const handleMouseover1 = (e) => {
      setLineOffset(e.offsetY)
      setDirection(2)
    }

    const handleMouseout = () => {
      setDirection(0)
    }

    const horizontalRuler = horizontalRulerRef.current
    const verticalRuler = verticalRulerRef.current
    horizontalRuler.addEventListener('mousemove', handleMouseover0)
    horizontalRuler.addEventListener('mouseout', handleMouseout)
    verticalRuler.addEventListener('mousemove', handleMouseover1)
    verticalRuler.addEventListener('mouseout', handleMouseout)

    return () => {
      horizontalRuler.removeEventListener('mousemove', handleMouseover0)
      horizontalRuler.removeEventListener('mouseout', handleMouseout)
      verticalRuler.removeEventListener('mousemove', handleMouseover1)
      verticalRuler.removeEventListener('mouseout', handleMouseout)
    }
  }, [])

  useEffect(() => {
    // direction && setLineOffset(0)
  }, [direction])

  useEffect(() => {
    let length = Object.keys(boxes).length
    if (length > 0) {
      let id = formOptions.id
      let tempBoxs = { ...boxes[id] };
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
      let left = monitor.getClientOffset().x - 200;
      let top = monitor.getClientOffset().y;
      const currentOffset = monitor.getSourceClientOffset();
      // console.log(currentOffset)
      // const initialOffset= monitor.getInitialSourceClientOffset();
      const id = item.id ? item.id : nanoid();
      let { x, y } = currentOffset
      top=y
      left=x-200
      // transform1 = `translate(${x}px, ${y}px)`
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
  // const transform=transform1?transform:''
  // console.log(transform)
  return (
    <div ref={rulerRef} className='ruler-container'>
      {/* transform相对于top的性能更好，减少重绘与回流 */}
      <div className='horizontal-line' style={{ width: direction === 2 ? `${containerWidth}px` : '0px', transform: `translateY(${direction === 2 ? lineOffset : 0}px)` }}>
        {/* <div className='horizontal-line' style={{ width: direction === 2 ? `${containerWidth}px` : '0px', top: `${direction === 2 ? lineOffset : 0}px` }}> */}
        <div className='line-offset-value' style={{ visibility: direction === 2 ? 'visible' : 'hidden' }}>{lineOffset}</div>
      </div>
      <div className='vertical-line' style={{ height: direction === 1 ? `${containerHeight}px` : '0px', transform: `translateX(${direction === 1 ? lineOffset : 0}px)` }}>
        {/* <div className='vertical-line' style={{ height: direction === 1 ? `${containerHeight}px` : '0px', left: `${direction === 1 ? lineOffset : 0}px` }}> */}
        <div className='line-offset-value' style={{ visibility: direction === 1 ? 'visible' : 'hidden' }} >{lineOffset}</div>
      </div>
      {/* 横向指示线移到这个位置就正常了 */}
      <div ref={horizontalRulerRef} className='horizontal-ruler'>
        <Ruler width={1000} height={20} />
      </div>
      <div ref={verticalRulerRef} className='vertical-ruler'>
        <Ruler type="vertical" width={20} height={1000} />
      </div>
      <div className='huabu' ref={drop} data-testid='dustbin'>
        {/* {isActive ? 'Release to drop' : 'Drag a box here'} */}
        {Object.keys(boxes).map(key => {
          // const Chart = boxes[key].chart
          const chartType = boxes[key].chartType
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
    </div>
  );
}

export default CenterPage;
