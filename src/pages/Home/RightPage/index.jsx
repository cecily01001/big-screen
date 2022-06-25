/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';
import { useSelector } from 'react-redux';
import './style.less';
import { useEffect } from 'react';

const RightPage = () => {
  const common = useSelector(state => state.editor).common_options;
  console.log(common);

  useEffect(() => {
    setLayerName(common.layer_name);
    setX(common.translate_x);
    setY(common.translate_y);
    setW(common.width);
    setH(common.height);
  }, [common]);

  const [layerName, setLayerName] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [z, setZ] = useState(1);

  const onChange = (name, value) => {
    const label = '';
    switch (name) {
      case 'name':
        setLayerName(value);
        break;
      case 'x':
        setX(value);
        break;
      case 'y':
        setY(value);
        break;
      case 'w':
        setW(value);
        break;
      case 'h':
        setH(value);
        break;
    }
  };

  return (
    <div className='right_content'>
      <div className='config-container'>
        <div>配置</div>
        <div className='form-item'>
          <div className='form-item-title'>名称</div>
          <div className='form-item-content'>
            <Input
              showCount
              maxLength={20}
              size='small'
              value={layerName}
              onChange={val => onChange('name', val)}
            />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-item-title'>尺寸</div>
          <div className='form-item-content'>
            <InputNumber
              prefix='宽度'
              style={{ width: '49%' }}
              size='small'
              value={w}
              onChange={val => onChange('w', val)}
            />
            <InputNumber
              prefix='高度'
              value={h}
              style={{ width: '49%' }}
              size='small'
              onChange={val => onChange('h', val)}
            />
          </div>
        </div>
        <div className='form-item'>
          <div className='form-item-title'>位置</div>
          <div className='form-item-content'>
            <InputNumber
              prefix='上'
              value={y}
              style={{ width: '49%' }}
              size='small'
              onChange={val => onChange('y', val)}
            />
            <InputNumber
              prefix='左'
              value={x}
              style={{ width: '49%' }}
              size='small'
              onChange={val => onChange('x', val)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPage;
