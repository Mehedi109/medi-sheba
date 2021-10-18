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
            src="https://i.ibb.co/vjC6Rpb/photo-1532938911079-1b06ac7ceec7-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block h-100 w-100 img-fluid"
            src="https://i.ibb.co/FJLqPM4/photo-1504813184591-01572f98c85f-ixlib-rb-1-2.jpg/200x200"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block h-100 w-100 img-fluid"
            src="https://i.ibb.co/qkzpjvf/photo-1514416205405-075ab2f15964-ixlib-rb-1-2.jpg/200x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
