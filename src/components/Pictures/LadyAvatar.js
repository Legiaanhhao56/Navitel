import React from 'react';
import LadyAvatar from '../../images/girl.png';
import styles from './Pictures.module.css';

const ladyAvatar = () => (
    <div>
        <img className={styles["LadyAvatar"]} src={LadyAvatar} alt="LadyAvatar"/>
    </div>
)

export default ladyAvatar;