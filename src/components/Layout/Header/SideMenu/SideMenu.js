import React from 'react'

import style from './SideMenu.module.scss'

const sideMenu = ({open, children}) => (
    <div className={`${style.sideMenu} ${open ? style.sideMenuActive : null }`} >
        <nav>
            {children}
        </nav>
    </div>
)

export default sideMenu