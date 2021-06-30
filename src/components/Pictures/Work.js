import React from 'react';
import Work from '../../images/works-1.png';
import styles from './Pictures.module.css';

const work = () => (
    <div>
        <img className={styles["Work"]} src={Work} alt="Work"/>
    </div>
)

export default work;