import React from 'react';
import Arrow from '../../images/arrow2-1.png';
import styles from './Pictures.module.css';

const arrow = () => (
    <div>
        <img className={styles["Arrow"]} src={Arrow} alt="Arrow"/>
    </div>
)

export default arrow;