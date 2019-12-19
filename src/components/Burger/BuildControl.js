import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = props => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button
                onClick={props.removed} 
                disabled={props.disabled} 
                className={styles.Less}>Retire
            </button>
            <button
                onClick={props.added} 
                className={styles.More}
                >Add
            </button>
        </div>
    )

};

export default buildControl;