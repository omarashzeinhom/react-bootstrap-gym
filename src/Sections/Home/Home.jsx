import React from 'react';
import './Home.scss';
import {Cta} from '../../Components/index';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <section id="home" className=''>
       <Container fluid className="text-center">
     

     <Card className="bg-dark text-white">
       <Card.Img
       alt="card-img"
       variant="top"
       src='https://res.cloudinary.com/du9aympvd/image/upload/v1660835366/code/js/companyportfolio/undraw_powerful_re_frhr_qzrfeo.svg'
       className="app__home-img"

       />
       <Card.Body>

<Card.Title>
<h1 className='app__home-headertext'>Were   <span className='app__home-innertext'>Super</span> Hero's!</h1>

 <Card.Text>
  <blockquote className='blockquote mb-0'>
   <p>
   “To hell with circumstances; I create opportunities.” 
   </p>
<footer className='blockquote-footer'>
- Bruce Lee
</footer>
  </blockquote>

 </Card.Text>
</Card.Title>

<Cta/>

       </Card.Body>
     </Card>
     <video width="100%"  autoPlay loop loading="lazy" className='app__home-video'>
      <source  src="https://res.cloudinary.com/du9aympvd/video/upload/v1660842455/code/js/companyportfolio/videos/pexels-koolshooters-9943616_rdchdr.webm"/>


     </video>
   </Container>
 
   
    </section>

  )
}

export default Home