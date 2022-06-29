import React, { useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import { useDrop, useDrag } from 'react-dnd';
import * as echarts from 'echarts';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { changeRight } from '../../store/features/editorSlice';
import './style.less';
import PublicRightClick from '../PublicRightClick';

const MyBar = props => {

  const key = props.id;
  const left = props.left;
  const top = props.top;
  const width = props.width;
  const height = props.height;
  const chartRef = useRef();
  const dispatch = useDispatch();
  let chartInstance = null;
  // 显示/隐藏
  const [show, setShow] = useState(false);
  // 改变位置
  const [styles, setStyle] = useState({
    position: 'fixed', width: '100px', height: '160px', z_index: 1
  });
  // 获得show最新值
  const showRef = useRef();
  // 右键菜单ref
  const rightClickRef = useRef();

  const [{ isDragging, handlerId, hovered, highlighted }, drag] = useDrag(
    () => ({
      type: 'trueEle',
      item: {
        id: key,
        options: props.options
      },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
        hovered: monitor.getItem(),
        highlighted: monitor.canDrag()
      })
    })
  );

  const handleClick = () => {
    const chartEle = getComputedStyle(chartRef.current);
    dispatch(
      changeRight({
        id: key,
        layer_name: 'test',
        translate_x: left,
        translate_y: top,
        width: Number(chartEle.width.slice(0, -2)),
        height: Number(chartEle.height.slice(0, -2)),
        z_index: 1
      })
    );
  };

  const handleContextMenu = (event) => {
    // 屏蔽默认右键事件
    event.preventDefault();
    // 先显示才能捕捉到右键菜单Ref
    // 否则rightClickRef将为undefined
    setShow(true);
    // 获得点击的位置
    let { clientX, clientY } = event;
    // 文档显示区的宽度
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    // 右键菜单的宽度
    const rightClickRefW = 100;
    const rightClickRefH = 160;
    // right为true，说明鼠标点击的位置到浏览器的右边界的宽度可以放下contextmenu。
    // 否则，菜单放到左边。
    const right = (screenW - clientX) > rightClickRefW;
    const top = (screenH - clientY) > rightClickRefH;
    // 赋值右键菜单离鼠标一些距离
    clientX = right ? clientX - 200 : clientX - rightClickRefW - 150;
    clientY = top ? clientY - 200 : clientY - rightClickRefH - 50;
    setStyle({
      ...styles,
      left: clientX,
      top: clientY
    });

  };
  // 点击事件
  const handleOtherPlaceClick = (event) => {
    // 聊天页面中会一直监听左键点击事件直到销毁  
    // 如果右键菜单不出现则不做逻辑处理、避免冲突
    if (!showRef.current) return;
    // 点击目标不在右键菜单里则关闭菜单
    if (event.target.parentNode !== rightClickRef.current) {
      setShow(false)
    }
  };

  // 滑动关闭右键功能
  const setShowFalse = () => {
    // 如果右键菜单不出现则不做逻辑处理
    // eslint-disable-next-line no-useless-return
    if (!showRef.current) return;
    // 滚动直接关闭
    setShow(false)
  };

  useEffect(() => {
    if (chartRef.current && props.options) {
      chartInstance = echarts.init(chartRef.current);
      chartInstance.setOption(props.options);
    }
  });

  useEffect(() => {
    chartInstance?.resize()
  }, [width, height])

  useEffect(() => {
    // document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('mousedown', handleOtherPlaceClick, true);
    document.addEventListener('scroll', setShowFalse, true);
    return () => {
      // document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousedown', handleOtherPlaceClick, true);
      document.removeEventListener('scroll', setShowFalse, true);
    }
  }, []);
  // 副作用: show一改变就赋值showRef新的state。
  // 因为监听事件获取不到最新的state
  // 通过ref来获取。美滋滋
  useEffect(() => {
    showRef.current = show;
  }, [show]);

  const handleDelete = (event) => {
    // event.stopPropagation()
    console.log('delete')
    props.handleDelete(props.id)
  }

  // 渲染右键
  const renderContentMenu = () => (
    <div ref={rightClickRef} className="WeChatContactsAvatarTools" style={styles} >
      <div className="rightClickItems" onClick={handleDelete}>
        删除
      </div>
      <div className="rightClickItems">
        Mute Notifications
      </div>
      <div className="rightClickItems">
        Remove
      </div>
      <div className="rightClickItems">
        Clear Chat History
      </div>
    </div>
  );

  return (
    <div
      className='center_container'
      ref={drag}
      style={{ left, top, width, height }}
      data-testid='box'
      onClick={handleClick}
      onContextMenu={handleContextMenu}>
      <div className='chart' ref={chartRef} >
      </div>
      {show ? renderContentMenu() : null}
    </div>
  );
};
export default MyBar;
