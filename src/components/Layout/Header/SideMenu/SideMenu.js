import React from 'react'

import style from './SideMenu.module.scss'

const sideMenu = ({open, children}) => (
    <aside className={`${style.sideMenu} ${open ? style.sideMenuActive : null }`} >
        <nav>
            {children}
        </nav>
    </aside>
)

export default sideMenu