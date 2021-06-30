import React from 'react';
import TwoPhones from '../../images/twophones.png';
import styles from './Pictures.module.css';

const twophones = () => (
    <div>
        <img className={styles["TwoPhones"]} src={TwoPhones} alt="TwoPhones"/>
    </div>
)

export default twophones;