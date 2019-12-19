import React, { Fragment } from 'react';

import styles from './styles/Layout.module.css';

import Toolbar from './Navigation/Toolbar';

const layout = ( props ) => {

    return (
        <Fragment>
            <Toolbar />
            <main className={styles.Content}>
                {props.children}
            </main>
        </Fragment>
    )
};

export default layout;