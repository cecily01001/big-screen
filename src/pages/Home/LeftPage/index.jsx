/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import { useDrag } from 'react-dnd';
import React, { useRef } from 'react';
import './style.less';
import bar from '../../../assets/images/bar.png';
import line from '../../../assets/images/line.png';
import LeftPicture from '../../../components/LeftPictuer';

// const style = {
//   border: '1px dashed gray',
//   backgroundColor: 'white',
//   padding: '0.5rem 1rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   cursor: 'move',
// };
const LeftPage = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'leftEle',
    item: {
      name: '柱状图',
      options: {
        legend: {
          data: [
            '3-11岁任务数',
            '3-11岁全程接种量',
            '60岁任务数',
            '60岁全程接种量',
            '80岁任务数',
            '80岁全程接种量',
            '完成率',
          ],
        },
        xAxis: {
          type: 'category',
          data: ['街道1', '街道2', '街道3', '街道4', '街道5', '街道6', '街道7'],
        },
        yAxis: [
          { type: 'value' },

        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            color: '#fff',
            align: 'left',
            fontSize: 14,
          },
          backgroundColor: 'rgba(0,0,0,0.8)',
        },
        series: [
          {
            name: '3-11岁任务数',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'bar',
          },
        ],
      },
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

  return (
    <div className="component">
      <LeftPicture type={bar} />
      <LeftPicture type={line} />
    </div>
  );
};

export default LeftPage;
