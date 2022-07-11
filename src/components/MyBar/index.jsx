import React, { useCallback, useEffect, useRef, useState } from 'react';
import update from 'immutability-helper';
import { useDrop, useDrag } from 'react-dnd';
import * as echarts from 'echarts';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { changeRight, clearBoxes } from '../../store/features/editorSlice';
import './style.less';


const MyBar = props => {

  const key = props.id;
  const left = props.left;
  const top = props.top;
  const width = props.width;
  const height = props.height;
  const chartType = props.chartType;
  // const config = props.config;
  const dispatch = useDispatch();

  // 显示/隐藏
  const [show, setShow] = useState(false);
  // 改变右键菜单位置
  const [styles, setStyle] = useState({
    position: 'fixed', width: '100px', height: '160px', z_index: 1
  });
  // 选定之后的边框
  const [border, setBorder] = useState({})

  const chartRef = useRef();
  const chartContainerRef = useRef();
  // 获得show最新值
  const showRef = useRef();
  // 右键菜单ref
  const rightClickRef = useRef();



  let chartInstance = null;


  const [{ }, drag] = useDrag(
    () => ({
      type: 'trueEle',
      item: {
        id: key,
        chartType: chartType,
        // config: config
      },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
        hovered: monitor.getItem(),
        highlighted: monitor.canDrag()
      })
    })
  );

  // echarts上面的左键点击事件
  const handleClick = () => {
    // chart点击时传输当前设置送入redux
    const chartEle = getComputedStyle(chartRef.current);
    dispatch(
      changeRight({
        id: key,
        chartType:chartType,
        layer_name: 'test',
        translate_x: left,
        translate_y: top,
        width: Number(chartEle.width.slice(0, -2)),
        height: Number(chartEle.height.slice(0, -2)),
        z_index: 1,
        // config:config
      })
    );
    // 点击的时候出现白色框
    setBorder({ border: '1px solid #fff' })
  };


  /* 
  * -------------------------------------------------------
  * 处理右键点击功能以及右键菜单中的功能
  */
  // 处理echarts上面右键点击事件
  const handleContextMenu = (event) => {
    // 屏蔽默认右键事件
    event.preventDefault();
    // 先显示才能捕捉到右键菜单Ref
    // 否则rightClickRef将为undefined
    setShow(true);
    setBorder({ border: '1px solid #fff' })
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
  // 处理右侧菜单删除功能
  const handleDelete = () => {
    props.handleDelete(props.id)
  }

  const clearAllBoxes = () => {
    dispatch(
      clearBoxes()
    )
  }
  /* 
  * 右键菜单的具体功能实现完毕
  * ----------------------------------------------------------------------------
  */

  // 副作用: show一改变就赋值showRef新的state。
  // 因为监听事件获取不到最新的state
  // 通过ref来获取。美滋滋
  useEffect(() => {
    showRef.current = show;
  }, [show]);

  /* 
  * --------------------------------------------------------------------------------------
  * 全局监听事件以及其对应函数
  */
  // 点击非菜单组件，就会让菜单消失
  const handleCancleMenuClick = (event) => {
    // 聊天页面中会一直监听左键点击事件直到销毁  
    // 如果右键菜单不出现则不做逻辑处理、避免冲突
    if (!showRef.current) return;
    if (event.target.parentNode !== rightClickRef.current) {
      setShow(false)

    }
  };

  // 点击非chart组件，让chart的白边消失
  const handleOtherPlaceClick = (event) => {
    if (chartContainerRef.current && getComputedStyle(chartContainerRef.current).border == '1px solid rgba(0, 0, 0, 0)') return;
    if (event.target.parentNode !== chartContainerRef.current) {
      setBorder({})
    }
  }
  // 滑动关闭右键菜单
  const handleScroll = () => {
    // 如果右键菜单不出现则不做逻辑处理
    if (!showRef.current) return;
    // 滚动直接关闭
    setShow(false)
  };
  // 全局监听
  useEffect(() => {
    document.addEventListener('mousedown', handleCancleMenuClick, true);
    document.addEventListener('click', handleOtherPlaceClick, true);
    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleOtherPlaceClick, true);
      document.removeEventListener('click', handleOtherPlaceClick, true);
      document.removeEventListener('scroll', handleScroll, true);
    }
  }, []);
  /* 
  * --------------------------------------------------------------------------------------
  * 全局监听事件以及其对应函数
  */






  // 右鍵菜單的div
  const renderContentMenu = () => (
    <div ref={rightClickRef} className="WeChatContactsAvatarTools" style={styles} >
      <div className="rightClickItems" onClick={handleDelete}>
        删除
      </div>
      <div className="rightClickItems" onClick={clearAllBoxes}>
        清空
      </div>
    </div>
  );

  return (
    <div className='center_container' style={{ left, top, width, height, ...border }} ref={chartContainerRef}>
      <div
        ref={drag}
        className='chart-content'
        data-testid='box'
        onClick={handleClick}
        onContextMenu={handleContextMenu}>
        <div className='chart' ref={chartRef} >
          {props.children}
        </div>
        {/* 如果show，則渲染右键菜单组件 */}
        {show ? renderContentMenu() : null}
      </div>
    </div>

  );
};
export default MyBar;
