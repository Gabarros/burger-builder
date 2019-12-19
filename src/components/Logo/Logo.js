import React from 'react';

import styles from './Logo.module.css'

import burguerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className={styles.Logo}>
        <img style={{height: props.height}} src={burguerLogo} alt="MyBurguerLogo"></img>
    </div>
);

export default logo;