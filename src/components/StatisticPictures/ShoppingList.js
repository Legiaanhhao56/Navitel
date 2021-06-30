import React from 'react';
import ShoppingList from '../../images/Transparent/10.png';
import styles from './Static.module.css';

const shoppingList = () => (
    <div>
        <img className={styles["ShoppingList"]} src={ShoppingList} alt="ShoppingList"/>
    </div>
)

export default shoppingList;