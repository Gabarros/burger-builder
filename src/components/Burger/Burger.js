import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient';

const burger = (props)=>{

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_, i)=>{
                return <BurgerIngredient key={ingredient + i} type={ingredient} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if (transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
        console.log(transformedIngredients);

    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

};

export default burger;