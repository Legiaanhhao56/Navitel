import React from 'react';
import Map from '../../images/map (1).png';
import styles from './Pictures.module.css';

const map = () => (
    <div>
        <img className={styles["Map"]} src={Map} alt="Map"/>
    </div>
)

export default map;