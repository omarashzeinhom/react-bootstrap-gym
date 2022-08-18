import React, { useRef } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from '@emailjs/browser';


const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_atio5fi', 'template_kw6g6gs', form.current, 'c2aZX504KYs3Eja_5').then((result)=>{
    console.log(result.text);
  }, (error)=>{
    console.log(error.text);
  })




}



  return (
    <section id="contact">
      <h1>Contact</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="user_email" />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="user_name"/>
        </Form.Group>


        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
        </FloatingLabel>
        <Form.Label>Questions?</Form.Label>

        <FloatingLabel controlId="floatingTextarea2" label="Send us your inquiry">
          <Form.Control
            as="textarea"
            placeholder="Send us your inquiry"
            name="message"
            style={{ height: '100px', resize: 'none' }}
          />
        </FloatingLabel>

        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        <Button variant="warning" type="submit" value="Send" >
          Submit
        </Button>
      </Form>

    
    </section>
  )
}

export default Contact