import React from 'react';
import LeftArrow from '../../images/arrow copy-1.png';
import styles from './Pictures.module.css';

const leftArrow = () => (
    <div>
        <img className={styles["LeftArrow"]} src={LeftArrow} alt="LeftArrow"/>
    </div>
)

export default leftArrow;