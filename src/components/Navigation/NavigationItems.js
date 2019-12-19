import React from 'react';

import NavigationItem from './NavigationItem';

import styles from './NavigationItems.module.css';

const navigationItems = () => {

    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem
                link="/"
                active={true}>
                Burger Builder
            </NavigationItem>
            <NavigationItem
                link="/">
                Checkout
            </NavigationItem>
        </ul>

    );
};

export default navigationItems;