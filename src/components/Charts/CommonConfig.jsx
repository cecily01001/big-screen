import React, { useState } from 'react'
import { Collapse } from 'antd';
import SettingBox from './components/SettingBox';
import SettingItem from './components/SettingItem';
import { useDispatch } from 'react-redux';
import { changeChart } from '../../store/features/editorSlice';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CommonConfig = (props) => {
    let dispatch = useDispatch()

    const onChange = (key) => {
        console.log(key);
    };
    const [title, setTitle] = useState({
        id: '',
        name: '',
        color: '',
        size: '',
        offset: '',
        type:props.type
    })

    function changeEleValue(name, value) {
        title[name] = value
        setTitle({ ...title })
        dispatch(changeChart(title))
    }

    return (
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="X轴" key="1">
                <div>
                    <SettingBox name='单位' >
                        <SettingItem name='名称' label='name' changeEleValue={changeEleValue}></SettingItem>
                        <SettingItem name='颜色' label='color' changeEleValue={changeEleValue}></SettingItem>
                        <SettingItem name='大小' label='size' changeEleValue={changeEleValue}></SettingItem>
                        <SettingItem name='偏移量' label='offset' changeEleValue={changeEleValue}></SettingItem>
                    </SettingBox>
                    <SettingBox name='单位' >
                        <SettingItem name='名称'></SettingItem>
                        <SettingItem name='颜色'></SettingItem>
                        <SettingItem name='大小'></SettingItem>
                        <SettingItem name='偏移量'></SettingItem>
                    </SettingBox>
                    <SettingBox name='单位' >
                        <SettingItem name='名称'></SettingItem>
                        <SettingItem name='颜色'></SettingItem>
                        <SettingItem name='大小'></SettingItem>
                        <SettingItem name='偏移量'></SettingItem>
                    </SettingBox>

                </div>
            </Panel>
            <Panel header="Y轴" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="图例" key="3">
                <p>{text}</p>
            </Panel>
        </Collapse>
    )
}

export default CommonConfig