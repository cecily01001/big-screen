import React, { useState } from 'react'
import { Input } from 'antd'
import './common.less'

const SettingItem = (props) => {

    const { name, label} = props
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
        props?.changeEleValue(label, e.target.value)
    }

    return (
        <div className='item-container'>
            <div>
                <Input value={value} onChange={handleChange}></Input>
            </div>
            <div className='name'>{name}</div>
        </div>
    )
}

export default SettingItem