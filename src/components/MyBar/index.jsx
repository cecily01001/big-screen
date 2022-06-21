/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import update from 'immutability-helper';
import { useDrop, useDrag } from 'react-dnd';
import * as echarts from 'echarts';
import './style.less';

const MyBar = (props) => {
  const key = props.id;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'trueEle',
    item: {
      id: key,
      options: props.options,
    },
    // end: (item, monitor) => {
    // const dropResult = monitor.getDropResult();
    // if (item && dropResult) {}
    // },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current && props.options) {
      const chartInstance = echarts.init(chartRef.current);
      chartInstance.setOption(props.options);
    }
  });

  const left = props.left;
  const top = props.top;

  return (
    <div
      className="center_container"
      ref={drag}
      style={{ left, top }}
      data-testid="box"
    >
      <div className="chart" ref={chartRef} />
    </div>
  );
};
export default MyBar;
