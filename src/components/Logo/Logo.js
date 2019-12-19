import React from 'react';

import styles from './Logo.module.css'

import burguerLogo from '../../assets/images/burger-logo.png'

const logo = () => (
    <div className={styles.Logo}>
        <img src={burguerLogo} alt="MyBurguerLogo"></img>
    </div>
);

export default logo;