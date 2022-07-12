import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { config, Input, InputNumber, Segmented } from 'antd';
import { useState, useEffect } from 'react';
import { changeLeft } from '../../store/features/editorSlice';
import './index.less'

const CommonChartConfig = () => {
  const dispatch = useDispatch();
  const common = useSelector(state => state.editor).common_options;

  useEffect(() => {
    setId(common.id)
    setLayerName(common.layer_name);
    setX(common.translate_x);
    setY(common.translate_y);
    setW(common.width);
    setH(common.height);
  }, [{ ...common }]);

  const [layerName, setLayerName] = useState(' ');
  const [id, setId] = useState('')
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [z, setZ] = useState(1);

  const onChange = (name, value) => {
    const label = '';
    switch (name) {
      case 'name':
        setLayerName(value.target.value);
        dispatch(changeLeft({
          id: common.id,
          layer_name: value.target.value,
          translate_x: x,
          translate_y: y,
          width: w,
          height: h,
          z_index: 1
        }))
        break;
      case 'x':
        setX(value);
        dispatch(changeLeft({
          id: common.id,
          layer_name: layerName,
          translate_x: value,
          translate_y: y,
          width: w,
          height: h,
          z_index: 1
        }))
        break;
      case 'y':
        setY(value);
        dispatch(changeLeft({
          id: common.id,
          layer_name: layerName,
          translate_x: x,
          translate_y: value,
          width: w,
          height: h,
          z_index: 1
        }))
        break;
      case 'w':
        setW(value);
        dispatch(changeLeft({
          id: common.id,
          layer_name: layerName,
          translate_x: x,
          translate_y: y,
          width: value,
          height: h,
          z_index: 1
        }))
        break;
      case 'h':
        setH(value);
        dispatch(changeLeft({
          id: common.id,
          layer_name: layerName,
          translate_x: x,
          translate_y: y,
          width: w,
          height: value,
          z_index: 1
        }))
        break;
    }
  };

  return (
    <div className='config-container'>
      <div className='segmented-container'>
        <Segmented block options={['页面配置']} />
      </div>
      <div className='config-content'>
        <div className='config-item'>
          <div className='config-item-title'>名称</div>
          <div className='config-item-content'>
            <Input
              showCount
              maxLength={20}
              value={layerName}
              onChange={() => {
                onChange('name', event)
              }}
            />
          </div>
        </div>
        <div className='config-item'>
          <div className='config-item-title'>尺寸</div>
          <div className='config-item-content'>
            <InputNumber
              prefix='宽度'
              style={{ width: '49%' }}
              value={w}
              onChange={(val) => {
                onChange('w', val)
              }}
            />
            <InputNumber
              prefix='高度'
              value={h}
              style={{ width: '49%' }}
              onChange={val => onChange('h', val)}
            />
          </div>
        </div>
        <div className='config-item'>
          <div className='config-item-title'>位置</div>
          <div className='config-item-content'>
            <InputNumber
              prefix='上'
              value={y}
              style={{ width: '49%' }}
              onChange={val => onChange('y', val)}
            />
            <InputNumber
              prefix='左'
              value={x}
              style={{ width: '49%' }}
              onChange={val => onChange('x', val)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonChartConfig