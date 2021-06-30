
import React, { useState } from 'react';
import Image1 from '../Pictures/DisyouKnow1';
import Image2 from '../Pictures/Didyouknow4';
import Image3 from '../Pictures/DidyouKnow3';
import Image4 from '../Pictures/DidyouKnow36';
import Image5 from '../Pictures/DidyouKnow2';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} touch>
        <Carousel.Item>
          <Image1/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image2/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image3/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image4/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image5/>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  