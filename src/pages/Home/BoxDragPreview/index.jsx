import { memo, useEffect, useState } from 'react'
import './style.less';
import Bar from '../../../assets/images/bar.png'

import React from 'react'
import { getChartComp } from '../../../utils'
import { useSelector } from 'react-redux';

const BoxDragPreview = (props) => {
  const Chart = getChartComp(props.chartType)
  const formOptions = useSelector(state => state.editor).common_options;
  console.log(formOptions.height)
  console.log(formOptions.width)
  const height=formOptions.height?formOptions.height:'258px'
  const width=formOptions.width?formOptions.width:'298px'
  return (
    <div className='dragimboxdragg' style={{height,width}}>
      <div className='chart'>
        <Chart />
      </div>
      {/* <img src={Bar}></img> */}
    </div>
  )
}

export default memo(BoxDragPreview)