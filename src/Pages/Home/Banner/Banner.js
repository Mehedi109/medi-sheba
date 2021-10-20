import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      {/* <img className="img-fluid" src="https://i.ibb.co/vjC6Rpb/photo-1532938911079-1b06ac7ceec7-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg" alt="" /> */}
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 img-fluid"
            // src="https://i.ibb.co/vjC6Rpb/photo-1532938911079-1b06ac7ceec7-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
            // alt="First slide"
            src="https://i.ibb.co/yRyXwcY/michael-longmire-L9-EV3-Oog-Lh0-unsplash.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Provide you a good service is our first priority </h3>
            <p>Be confident, stay happy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block h-100 w-100 img-fluid"
            src="https://i.ibb.co/FJLqPM4/photo-1504813184591-01572f98c85f-ixlib-rb-1-2.jpg/200x200"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Provide you a good service is our first priority </h3>
            <p>Be confident, stay happy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block h-100 w-100 img-fluid"
            src="https://i.ibb.co/qkzpjvf/photo-1514416205405-075ab2f15964-ixlib-rb-1-2.jpg/200x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Provide you a good service is our first priority</h3>
            <p>Be confident, stay happy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
