import React from 'react';
import LightBulb from '../../images/bulb.png';
import styles from './Pictures.module.css';

const lightbulb = () => (
    <div>
        <img className={styles["LightBulb"]} src={LightBulb} alt="LightBulb"/>
    </div>
)

export default lightbulb;