import React from 'react';
import PhoneMap from '../../images/NaviTell-Onepage-Website.png';
import styles from './Pictures.module.css';

const phoneMap = () => (
    <div>
        <img className={styles["MapPhone"]} src={PhoneMap} alt="MapPhone"/>
    </div>
)

export default phoneMap;