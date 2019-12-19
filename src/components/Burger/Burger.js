import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient';

const burger = (props)=>{

    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_, i)=>{
                return <BurgerIngredient key={ingredient + 1} type={ingredient} />
            });
        });

    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

};

export default burger;