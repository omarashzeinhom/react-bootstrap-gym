import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const ServicesCards = () => {
  return (
   <>
    <Container>

</Container>
<Container fluid className="text-center">
<Row>
  <h2 className='app__about-headertext'>Servi<span className='app__about-innertext'>ces</span>
  </h2>




  <Col size="6" xs={6}>
    <Card className="bg-dark text-white app__about-card" >

      <Card.Body>

        <Card.Title>
          <h2 className='app__about-headertext'>Yo<span className='app__about-innertext'>ga</span></h2>

        </Card.Title>

        <div className='text-center'>
          <ul className='app__about-branches'>
            <li>New York</li>
            <li>Chicago</li>
            <li>Texas</li>
            <li>Atlanta</li>
          </ul>
          </div>
        <Card.Img
          alt="card-img"

          variant="bottom"
          src='https://res.cloudinary.com/du9aympvd/image/upload/v1660844107/code/js/companyportfolio/icons/home_pin_FILL0_wght400_GRAD0_opsz48_1_qodi3w.svg'
          className="app__about-img"

        />

      </Card.Body>
    </Card>

  </Col>

  <Col size="6" xs={6}>

    <Card className="bg-dark text-white app__about-card">

      <Card.Body>
        <Card.Title>
          <h1 className='app__about-headertext'>Phone<span className='app__about-innertext'>Numb</span>ers</h1>


        </Card.Title>
        <div className='text-center'>
          <ul className='app__about-branches'>
            <li>+201111111111</li>
            <li>+4911111</li>

          </ul>
          </div>


        <Card.Img
          variant="bottom"
          src='https://res.cloudinary.com/du9aympvd/image/upload/v1660844197/code/js/companyportfolio/icons/call_FILL0_wght400_GRAD0_opsz48_ewbh8b.svg'
          className="app__about-img"
        />
      </Card.Body>
    </Card>


  </Col>
  <Col size="6" xs={6}> <Card className="bg-dark text-white app__about-card">

    <Card.Body>

      <Card.Title>
        <h1 className='app__about-headertext'>Subs<span className='app__about-innertext'>crip</span>tions</h1>


      </Card.Title>
      <div className='text-center'>
        <ul className='app__about-branches'>
          <li>19.99$</li>
          <li>29.99$</li>
          <li>39.99$</li>
        </ul>
        </div>
      <Card.Img
        alt="card-img"

        variant="top"
        src='https://res.cloudinary.com/du9aympvd/image/upload/v1660844195/code/js/companyportfolio/icons/card_membership_FILL0_wght400_GRAD0_opsz48_t3najb.svg'
        className="app__about-img"

      />
    </Card.Body>
  </Card>

  </Col>


  <Col size="6" xs={6}> <Card className="bg-dark text-white app__about-card">

    <Card.Body>

      <Card.Title>
        <h1 className='app__about-headertext'>Classes<span className='app__about-innertext'>Avail</span>able!</h1>


      </Card.Title>
      <div className='text-center'>
        <ul className='app__about-branches'>
          <li>Yoga</li>
          <li>Boxing</li>
          <li>Private Trainner</li>
        </ul>
        </div>
      <Card.Img
        alt="card-img"

        variant="top"
        src='https://res.cloudinary.com/du9aympvd/image/upload/v1660845870/code/js/companyportfolio/icons/hotel_class_FILL0_wght400_GRAD0_opsz48_jore1b.svg'
        className="app__about-img"

      />
    </Card.Body>
  </Card>

  </Col>
















</Row>


</Container>
   </>

  )
}

export default ServicesCards