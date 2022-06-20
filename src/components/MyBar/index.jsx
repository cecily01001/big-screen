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
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: 'trueEle',
  //   item: {
  //     options: {
  //       legend: {
  //         data: [
  //           '3-11岁任务数',
  //           '3-11岁全程接种量',
  //           '60岁任务数',
  //           '60岁全程接种量',
  //           '80岁任务数',
  //           '80岁全程接种量',
  //           '完成率',
  //         ],
  //       },
  //       xAxis: {
  //         type: 'category',
  //         data: ['街道1', '街道2', '街道3', '街道4', '街道5', '街道6', '街道7'],
  //       },
  //       yAxis: [
  //         { type: 'value' },

  //       ],
  //       tooltip: {
  //         trigger: 'axis',
  //         axisPointer: {
  //           type: 'shadow',
  //         },
  //         textStyle: {
  //           color: '#fff',
  //           align: 'left',
  //           fontSize: 14,
  //         },
  //         backgroundColor: 'rgba(0,0,0,0.8)',
  //       },
  //       series: [
  //         {
  //           name: '3-11岁任务数',
  //           data: [150, 230, 224, 218, 135, 147, 260],
  //           type: 'bar',
  //         },
  //       ],
  //     },
  //   },
  //   // end: (item, monitor) => {
  //   // const dropResult = monitor.getDropResult();
  //   // if (item && dropResult) {}
  //   // },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //     handlerId: monitor.getHandlerId(),
  //   }),
  // }));
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
      // ref={drag}
      style={{ left, top }}
      data-testid="box"
    >
      <div className="chart" ref={chartRef} />
    </div>
  );
};
export default MyBar;
