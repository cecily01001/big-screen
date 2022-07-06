import React, { useEffect, useMemo, useRef, useState } from 'react'
import options from './barOption';
import * as echarts from 'echarts';
import '../style.less'
import { useSelector } from 'react-redux';

const Bar = (props) => {
  const barRef = useRef();
  const chart_options = useSelector(state => state.editor).chart_options

  const { width, height } = props

  // const [name,setName]=useState(chart_options.name)

  const [instance, setInstance] = useState(null)

  // let chartInstance = null;
  // useMemo(()=>{

  // })
  useEffect(() => {
    const chartInstance = echarts.init(barRef.current);
    chartInstance.setOption(options)

    setInstance(chartInstance)
  }, [])

  useEffect(() => {
    console.log(chart_options.name)
    // let mergedOptions=Object.assign({},options,{})
    options.title.text = chart_options.name;
    instance?.setOption(options)
  }, [chart_options])

  useEffect(() => {
    instance?.resize()
  }, [width, height])
  // useEffect(() => {
  //   if (chartRef.current && props.options) {
  //     chartInstance = echarts.init(chartRef.current);
  //     chartInstance.setOption(props.options);
  //   }
  // });

  return (
    <div ref={barRef} className='chart'>

    </div>
  )
}

export default Bar