import React, { useState } from 'react'
import { Input } from 'antd'
import CommonConfig from '../CommonConfig.jsx'


const BarConfig = () => {

  // const [options, setOptions] = useState({
  //   xAxis: {
  //     axisLabel: '#000'
  //   }
  // })

  // const onChange = (name, e) => {
  //   console.log(e.target.value)
  //   setOptions({
  //     xAxis: {
  //       axisLabel: e.value
  //     }
  //   })
  // }

  return (
    <div>BarConfig
      {/* <Input
        size='small'
        value={options.xAxis.axisLabel}
        onChange={() => {
          onChange('axisLabel', event)
        }}
      /> */}
      <CommonConfig />
    </div>
  )
}

export default BarConfig