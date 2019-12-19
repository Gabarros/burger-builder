import React, { Fragment } from 'react';

import styles from './Modal.module.css';

import Backdrop from './Backdrop';

const modal = (props) => {

    const style = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };

    return (
        <Fragment>
        <Backdrop 
            show={props.show} 
            clicked={props.modalClosed}
        />
            <div className={styles.Modal}
                style={style}
            >
                {props.children}
            </div>
        </Fragment>

    );

};

export default modal;