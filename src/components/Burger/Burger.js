import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient';

const burger = (props)=>{

    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

};

export default burger;