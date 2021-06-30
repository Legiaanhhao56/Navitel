import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css';
import TestimonialPicture from '../../components/Pictures/Testimonial';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} touch>
        <Carousel.Item>
           <div className={styles["Container"]}> 
            <div className={styles["Slide"]}>
                <blockquote>
                    <span className={styles["LeftQuotes"]}>&ldquo;</span><p>Every store has it's product placement so when you think logically that a specific product should be 'there' you still end up circling around the store and asking help from the hall workers</p><span className={styles["RightQuotes"]}>&ldquo; </span>
                </blockquote>
                <div className={styles["Image"]}><TestimonialPicture/></div>
                <h2 className={styles["H2Text"]}>Female 25</h2>
                <h6 className={styles["H6Text"]}>Tallinn, in a relationship</h6>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Interviewee 1</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <Image2/> */}
          <Carousel.Caption>
            <h3>Interviewee 2</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <Image3/> */}
          <Carousel.Caption>
            <h3>Interviewee 3</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <Image4/> */}
          <Carousel.Caption>
            <h3>Interviewee 4</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  