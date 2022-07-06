import React, { useEffect, useRef } from 'react';
import options from './lineOption';
import * as echarts from 'echarts';
import '../style.less'

const Line = () => {
  const lineRef = useRef();
  let chartInstance = null;

  useEffect(()=>{
    chartInstance = echarts.init(lineRef.current);
    chartInstance.setOption(options)
  })
  return (
    <div ref={lineRef} className='chart'>

    </div>
  )
}

export default Line