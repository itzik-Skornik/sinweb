import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
   <Carousel fade activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="ביהכנס.jpg"
                  alt="First slide"
                  height={"300px"} width={"600px"}
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="ביהכס1.jpg"
                  alt="Second slide"
                  height={"300px"} width={"600px"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="ביהכס2.jpg"
                  alt="Third slide"
                  height={"300px"} width={"600px"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="ביהכס3.jpg"
                  alt="Third slide"
                  height={"300px"} width={"600px"}

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="ביהכס4.jpg"
                  alt="Third slide"
                  height={"300px"} width={"600px"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="ביהכס5.jpg"
                  alt="Third slide"
                  height={"300px"} width={"600px"}
                />
              </Carousel.Item>

            </Carousel>
    </div> );
}

export default CarouselFadeExample;