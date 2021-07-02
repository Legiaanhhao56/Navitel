import React from 'react';
import Aleksandrs from '../../images/Aleksandrs.jpg';
import styles from './Pictures.module.css';

const aleksandrs = () => (
    <div>
        <img className={styles["Aleksandrs"]} src={Aleksandrs} alt="Aleksandrs"/>
    </div>
)

export default aleksandrs;