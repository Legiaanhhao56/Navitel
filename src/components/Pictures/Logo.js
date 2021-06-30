import React from 'react';
import Logo from '../../images/logo transparent new.png';
import styles from './Pictures.module.css';

const logo = () => (
    <div>
        <img className={styles["Logo"]} src={Logo} alt="Logo"/>
    </div>
)

export default logo;