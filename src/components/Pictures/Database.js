import React from 'react';
import Database from '../../images/database-storage.png';
import styles from './Pictures.module.css';

const database = () => (
    <div>
        <img className={styles["DataBase"]} src={Database} alt="DataBase"/>
    </div>
)

export default database;