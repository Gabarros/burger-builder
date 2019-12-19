import React from 'react';

import styles from './BuildControls.module.css';

import BuildControl from './BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];
const buildControls = props =>{
    return(
        <div className={styles.BuildControls}>
            {controls.map(control=>(
                <BuildControl 
                    key={control.label} 
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    
                      />
            ))}
        </div>
    );

};

export default buildControls;