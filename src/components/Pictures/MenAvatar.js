import React from 'react';
import MenAvatar from '../../images/profile.png';
import styles from './Pictures.module.css';

const menAvatar = () => (
    <div>
        <img className={styles["MenAvatar"]} src={MenAvatar} alt="MenAvatar"/>
    </div>
)

export default menAvatar;