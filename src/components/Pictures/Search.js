import React from 'react';
import Search from '../../images/magnifying-glass.png';
import styles from './Pictures.module.css';

const search = () => (
    <div>
        <img className={styles["Search"]} src={Search} alt="Search"/>
    </div>
)

export default search;