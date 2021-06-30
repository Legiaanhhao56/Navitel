import React from 'react';
import Location from '../../images/map.png';
import styles from './Pictures.module.css';

const location = () => (
    <div>
        <img className={styles["Location"]} src={Location} alt="Location"/>
    </div>
)

export default location;