import React from 'react'
import './ServicesCarousel.scss';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const ServicesCarousel = () => {
    return (
        <Container fluid>
            <Carousel variant="light" >
                <Carousel.Item>
                    <img
                        className=" app__servicesCarousel-img"
                        src="https://res.cloudinary.com/du9aympvd/image/upload/v1660838672/code/js/companyportfolio/undraw_healthy_habit_bh-5-w_noteac.svg"
                        alt="First slide"
                        loading="lazy"

                    />
                    <Carousel.Caption>
                        <h5>Workout Plans</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className=" app__servicesCarousel-img"
                        src="https://res.cloudinary.com/du9aympvd/image/upload/v1660838670/code/js/companyportfolio/undraw_meditation_re_gll0_oknuzf.svg"
                        alt="Second slide"
                        loading="lazy"

                    />
                    <Carousel.Caption>
                        <h5>Yoga</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" app__servicesCarousel-img"
                        src="https://res.cloudinary.com/du9aympvd/image/upload/v1660835363/code/js/companyportfolio/undraw_working_late_re_0c3y_movpsl.svg"
                        alt="Third slide"
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h5>24/7 Working</h5>
                        <p>
                            Come train at night or whenever you want          </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    )
}

export default ServicesCarousel