import React, { Fragment } from 'react';

import styles from './SideDrawer.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems';
import Backdrop from '../UI/Backdrop';

const sideDrawer = (props) => {

    let attachedClasses = [styles.SideDrawer, styles.Close];

    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open}
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Fragment>

    );

};

export default sideDrawer;