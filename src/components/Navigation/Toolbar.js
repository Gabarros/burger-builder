import React from 'react';

import styles from './Toolbar.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';

const toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo height="80%" />
            <nav>
                <NavigationItems />
            </nav>


        </header>
    )


};

export default toolbar;