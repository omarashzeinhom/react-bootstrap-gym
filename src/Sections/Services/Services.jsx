import React from 'react';
import { ServicesCards, ServicesCarousel } from '../../Components';
import './Services.scss';


const Services = () => {
  return (
    <section id='services'>
      <h1>      Services</h1>

<ServicesCards/>
      <ServicesCarousel/>
      </section>
  )
}

export default Services