import React from 'react';

import NavigationItem from './NavigationItem';

import styles from './NavigationItems.module.css';

const navigationItems = (props) => {

    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem
                link="/">
                Burger Builder
            </NavigationItem>
           { props.isAuthenticated
            ? <NavigationItem
                link="/orders">
                Orders
            </NavigationItem>
            : null }
            { !props.isAuthenticated  
            ? <NavigationItem 
            link="/auth">
                Authenticate
            </NavigationItem>
            : <NavigationItem 
            link="/logout">
                Logout
            </NavigationItem>
            }
        </ul>

    );
};

export default navigationItems;