import React from 'react';

import styles from './Modal.module.css';



const modal = (props) =>{

    const style = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };
    
    return(
        <div className={styles.Modal}
            style={style}
        >
            {props.children}
        </div>
    );

};

export default modal;