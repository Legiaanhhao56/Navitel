import React from 'react';
import Laura from '../../images/Laura Tillo copy.jpeg';
import styles from './Pictures.module.css';

const laura = () => (
    <div>
        <img className={styles["Laura"]} src={Laura} alt="Laura"/>
    </div>
)

export default laura;