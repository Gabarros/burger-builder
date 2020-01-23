import React from 'react';

import styles from './Toolbar.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';

const toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <div className={styles.DrawerToggle} onClick={props.showSideDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo height="80%" />
            <nav className={styles.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>


        </header>
    )


};

export default React.memo(toolbar);