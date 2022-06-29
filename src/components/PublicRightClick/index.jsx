import React, { useEffect, useState, useRef } from 'react';
import './style.less'

const PublicRightClick = (props) => {
  // 显示/隐藏
  // const [show, setShow] = useState(false);
  // 改变位置
  // const [style, setStyle] = useState({
  //   position: 'fixed', left: 300, top: 200, width: '100px', height: '160px'
  // });
  let style=props.style
  let show=props.show
  console.log(show)
  // 获得show最新值
  // const showRef = useRef();
  // 右键菜单ref
  // const rightClickRef = useRef();

  // 右键点击
  // const handleContextMenu = (event) => {
  //   // 屏蔽默认右键事件
  //   event.preventDefault();
  //   // 先显示才能捕捉到右键菜单Ref
  //   // 否则rightClickRef将为undefined
  //   setShow(true);
  //   // 获得点击的位置
  //   let { clientX, clientY } = event;
  //   // 文档显示区的宽度
  //   const screenW = window.innerWidth;
  //   const screenH = window.innerHeight;
  //   // 右键菜单的宽度
  //   const rightClickRefW = 100;
  //   const rightClickRefH = 160;
  //   // right为true，说明鼠标点击的位置到浏览器的右边界的宽度可以放下contextmenu。
  //   // 否则，菜单放到左边。
  //   const right = (screenW - clientX) > rightClickRefW;
  //   const top = (screenH - clientY) > rightClickRefH;
  //   // 赋值右键菜单离鼠标一些距离
  //   clientX = right ? clientX - 150 : clientX - rightClickRefW - 150;
  //   clientY = top ? clientY-50 : clientY - rightClickRefH - 50;
  //   setStyle({
  //     ...style,
  //     left: clientX,
  //     top: clientY
  //   });
  // };

  // 点击事件
  // const handleClick = (event) => {
  //   // 聊天页面中会一直监听左键点击事件直到销毁  
  //   // 如果右键菜单不出现则不做逻辑处理、避免冲突
  //   if (!showRef.current) return;
  //   // 点击目标不在右键菜单里则关闭菜单
  //   if (event.target.parentNode !== rightClickRef.current) {
  //     setShow(false)
  //   }
  // };

  // 滑动关闭右键功能
  // const setShowFalse = () => {
  //   // 如果右键菜单不出现则不做逻辑处理
  //   // eslint-disable-next-line no-useless-return
  //   if (!showRef.current) return;
  //   // 滚动直接关闭
  //   setShow(false)
  // };

  //点击删除事件
  const handleDelete=(event)=>{
    event.stopPropagation()
    console.log('delete')
    props.handleDelete(props.id)
  }

  // 生命周期监听
  // useEffect(() => {
  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('click', handleClick, true);
  //   document.addEventListener('scroll', setShowFalse, true);
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('click', handleClick, true);
  //     document.removeEventListener('scroll', setShowFalse, true);
  //   }
  // }, []);

  // 副作用: show一改变就赋值showRef新的state。
  // 因为监听事件获取不到最新的state
  // 通过ref来获取。美滋滋
  // useEffect(() => {
  //   showRef.current = show;
  // }, [show]);

  // 渲染右键
  const renderContentMenu = () => (
    // <div className="WeChatContactsAvatarTools" style={style} >
    //   <div className="rightClickItems" onClick={handleDelete}>
    //     删除
    //   </div>
    //   <div className="rightClickItems">
    //     Mute Notifications
    //   </div>
    //   <div className="rightClickItems">
    //     Remove
    //   </div>
    //   <div className="rightClickItems">
    //     Clear Chat History
    //   </div>
    // </div>
    <div>555</div>
  );
  // 总渲染
  console.log(show)

  return show ? renderContentMenu() : null;
};

export default React.memo(PublicRightClick);