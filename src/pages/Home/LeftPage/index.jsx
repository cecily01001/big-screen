import React from 'react';
import './style.less';
import LeftPicture from '../../../components/LeftPictuer';
import chartList from './data'

const LeftPage = () => {
  return (
    <div className='component'>
      {
        Object.keys(chartList).map((item, key) => {
          return <LeftPicture key={key} item={chartList[item]} name='leftPicEle' />
        })
      }
    </div>
  );
};

export default LeftPage;
