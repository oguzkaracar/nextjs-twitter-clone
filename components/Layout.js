import React from 'react'
import cn from 'classnames';

import styles from './layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={cn([styles.layout])}>
            {children}
        </div>
    )
}

export default Layout
