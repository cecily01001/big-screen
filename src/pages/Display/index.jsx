import React from 'react'
import Menu from './Menu'
import ModelList from './ModelList'
import './style.less'
import TopBar from './TopBar'

const Display = () => {
    return (
        <div className='display'>
            <div className='left_Menu'>
                <Menu />
            </div>
            <div className='rightContent'>
                <div className='topbar'>
                    <TopBar />
                </div>
                <div>
                    <ModelList />
                </div>
            </div>

        </div>
    )
}

export default Display