import React from 'react'
import { nanoid } from 'nanoid'
import CardShow from '../../../components/CardShow'
import { Pagination } from 'antd';
import './style.less'

const ModelList = () => {
  const models = [
    {
      id: nanoid(),
      publish: true,
      name: 'No1',
      content: {}
    },
    {
      id: nanoid(),
      publish: false,
      name: 'No2',
      content: {}
    },
    {
      id: nanoid(),
      publish: true,
      name: 'No3',
      content: {}
    },
    {
      id: nanoid(),
      publish: true,
      name: 'No4',
      content: {}
    },
    {
      id: nanoid(),
      publish: true,
      name: 'No5',
      content: {}
    },
  ]
  return (
    <div>
      <div className='model-card'>
        {models.map((ele, index) => (
          <CardShow ele={ele} key={index} />
        ))}
      </div>
      <div className='models-pagination'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default ModelList