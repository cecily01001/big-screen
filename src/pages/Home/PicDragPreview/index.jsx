import React, { memo } from 'react'
import './style.less'
const PicDragPreview = (props) => {
  return (
    <div className='dragimg'>
      <img src={props.img} />
    </div>
  )
}

export default memo(PicDragPreview)