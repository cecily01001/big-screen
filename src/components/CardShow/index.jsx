import React, { useEffect, useRef, useState } from 'react';
import './style.less'
import { CloseOutlined, ArrowsAltOutlined, EllipsisOutlined, BorderOuterOutlined, CopyOutlined, EditOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Popover, Modal } from 'antd';
import { useParams, withRouter, useLocation } from 'react-router-dom'
import MacButton from '../MacButton';

const CardShow = (props) => {
    const name = props.ele.name
    const publish = props.ele.publish
    const [visible, setVisible] = useState(false);
    const mac_btn_ref = useRef()
    const [showIcon, setShowIcon] = useState(false)

    useEffect(() => {
        mac_btn_ref.current.addEventListener('mouseover', () => { setShowIcon(true) })
        mac_btn_ref.current.addEventListener('mouseout', () => { setShowIcon(false) })
    }, [])
    const content = (
        <div>
            <p><BorderOuterOutlined />   预览</p>
            <p><CopyOutlined />   克隆</p>
            <p><EditOutlined />   重命名</p>
            <p><DownloadOutlined />   下载</p>
            <p><DeleteOutlined />   删除</p>
        </div>
    );
    const miniShow = () => {
        setVisible(true)
    }
    return (
        <div className='card-single'>
            <div className='mac-close-spread'>
                <div className='mac-btn-items' ref={mac_btn_ref}>
                    <MacButton color='#D83B37'><CloseOutlined style={{ color: showIcon ? '#363636' : 'transparent' }} /></MacButton>
                    <MacButton color='#259747'><ArrowsAltOutlined style={{ color: showIcon ? '#363636' : 'transparent' }} /></MacButton>
                </div>
            </div>
            <div className='list-content-img' onClick={miniShow}>
                <img src="https://www.mtruning.club/static/png/moke-20211219181327-4c823ea3.png"
                    alt="物料1-假数据不可用" />
            </div>
            <Modal
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <div className='mini-pic-container'>
                    <img height="450px" src='https://www.mtruning.club/static/png/moke-20211219181327-4c823ea3.png' />
                </div>

                {/* <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p> */}
            </Modal>
            <div className='card-action'>
                <p>{name}</p>
                {publish ?
                    <div className='card-publish'>
                        <div className='breath-yes'></div>
                        <div className='card-publish-text'>已发布</div>
                    </div> :
                    <div className='card-publish'>
                        <div className='breath-no'></div>
                        <div className='card-publish-text'>未发布</div>
                    </div>}
                <div className='card-options'>
                    <Popover content={content} title="">
                        <Button type="primary"><EllipsisOutlined /></Button>
                    </Popover>
                </div>

            </div>
        </div>
    )
}

export default withRouter(CardShow)