/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.less';
import { getConfigComp } from '../../../utils/index'
import CommonChartConfig from '../../../components/CommonChartConfig';

const RightPage = () => {
  const common = useSelector(state => state.editor).common_options;


  const Config = common.chartType ? getConfigComp(common.chartType) : X

  return (
    <div className='right-content'>
      <CommonChartConfig />
      <Config />
    </div>
  );
};

function X() {
  return <div>画布</div>
}

export default RightPage;
