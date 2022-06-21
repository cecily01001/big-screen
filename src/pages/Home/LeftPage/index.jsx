/* eslint-disable arrow-body-style */
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
  return (
    <div className="component">
      <LeftPicture type={bar} name="ele-bar" chart_type="bar" />
      <LeftPicture type={line} name="ele-line" chart_type="line" />
    </div>
  );
};

export default LeftPage;
