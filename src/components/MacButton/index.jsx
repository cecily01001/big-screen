import React from 'react'
import './style.less'
import { Button } from 'antd';

const MacButton = (props) => {
    return (
            <div className='mac-button' >
                <Button type="primary" shape="circle" style={{ backgroundColor: props.color }}>
                    {props.children}
                </Button>
            </div>
    )
}

export default MacButton