import React, { useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import { useDrop, useDrag } from 'react-dnd';
import * as echarts from 'echarts';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { common } from '../../store/features/editorSlice';
import './style.less';

const MyBar = props => {
  const key = props.id;
  const [{ isDragging, handlerId, hovered, highlighted }, drag] = useDrag(
    () => ({
      type: 'trueEle',
      item: {
        id: key,
        options: props.options
      },
      // end: (item, monitor) => {
      // const dropResult = monitor.getDropResult();
      // if (item && dropResult) {}
      // },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
        hovered: monitor.getItem(),
        highlighted: monitor.canDrag()
      })
    })
  );

  const chartRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (chartRef.current && props.options) {
      const chartInstance = echarts.init(chartRef.current);
      chartInstance.setOption(props.options);
    }
  });

  const left = props.left;
  const top = props.top;
  const handleClick = () => {
    console.log('click');
    const chartEle = getComputedStyle(chartRef.current);
    dispatch(
      common({
        // id: nanoid(),
        layer_name: 'test',
        translate_x: left,
        translate_y: top,
        width: chartEle.width,
        height: chartEle.height,
        z_index: 1
      })
    );
  };

  return (
    <div
      className='center_container'
      ref={drag}
      style={{ left, top }}
      data-testid='box'
      onClick={handleClick}>
      <div className='chart' ref={chartRef} />
    </div>
  );
};
export default MyBar;
