import React from 'react';
import Testimonial from '../../images/testimonials2.png';
import styles from './Pictures.module.css';

const testimonial = () => (
    <div>
        <img className={styles["Testimonial"]} src={Testimonial} alt="Testimonial"/>
    </div>
)

export default testimonial;