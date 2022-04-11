


import { Carousel } from 'react-bootstrap';
import React from 'react'
import"./Carousels.css";
 const Carousels = () => {
  return (
   <div>
    <Carousel>
    <Carousel.Item >
      <img className="d-block w-100" src="./imageimmo.png" alt="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="./imm01.png" alt="Second slide" />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="./imm3.jpg" alt="Third slide" />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
};
export default Carousels;
