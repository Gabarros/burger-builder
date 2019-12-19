import React, { Fragment } from 'react';

import styles from './styles/Layout.module.css';

import Toolbar from './Navigation/Toolbar';
import SideDrawer from './Navigation/SideDrawer';
const layout = ( props ) => {

    return (
        <Fragment>
            <Toolbar />
            <SideDrawer />
            <main className={styles.Content}>
                {props.children}
            </main>
        </Fragment>
    )
};

export default layout;