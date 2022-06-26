import { useDrag } from 'react-dnd';
import React from 'react';
import './style.less';
import bar from '../../../assets/images/bar.png';
import line from '../../../assets/images/line.png';
import LeftPicture from '../../../components/LeftPictuer';

const LeftPage = () => {
  return (
    <div className='component'>
      <LeftPicture type={bar} name='ele-bar' chart_type='bar' />
      <LeftPicture type={line} name='ele-line' chart_type='line' />
    </div>
  );
};

export default LeftPage;
