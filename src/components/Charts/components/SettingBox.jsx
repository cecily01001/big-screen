import React from 'react'
import './common.less'

const SettingBox = (props) => {

    const { name, children } = props

    return (
        <div className='setting-box'>
            <div className='name'>{name}</div>
            <div className='box'>
                {children}
            </div>
        </div>
    )
}

export default SettingBox