import React from 'react';
import './style.less';
import LeftPicture from '../../../components/LeftPictuer';
import { getChartNameList } from '../../../utils'

const LeftPage = () => {
  const chartNameList = getChartNameList()

  return (
    <div className='component'>
      {
        chartNameList.map((item, key) => {
          return <LeftPicture key={key} item={item} name='leftPicEle' />
        })
      }
    </div>
  );
};

export default LeftPage;
