import React from 'react'
import Button from 'react-bootstrap/Button';
import BlankPdf from '../../assets/blank.pdf'
//Grid System
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cta = () => {
  return (
    <>
      <Container >
        <Row>
          <Col size="6">   <a href={BlankPdf}>
            <Button variant="warning" size="lg">
             Portfolio <img
             src='https://res.cloudinary.com/du9aympvd/image/upload/v1660841334/code/js/companyportfolio/icons/file_download_FILL0_wght400_GRAD0_opsz48_ha5e44.svg'
             alt="download-icon"
             width="25"
             height="25"
             
             />
            </Button>

          </a></Col>
          <Col size="6"><a href='#contact'>
            <Button variant="outline-warning" size="lg">
              Contact
            </Button>

          </a></Col>
        </Row>
      </Container>











    </>
  )
}

export default Cta