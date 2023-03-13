import "./Form.scss"
import Form from "react-bootstrap/Form";
import React from "react"

const ContactForm = () => {
  return (
    <>
      <Form className='form'>
        <h5>Request contact</h5>
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">What do you want to talk about?</Form.Label>
          <Form.Control  className="form-control" type="email" placeholder="Topic" />

        </Form.Group>
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control  className="form-control" type="email" placeholder="Enter email" />
          <Form.Text className="form-text">
                    I will contact you as soon as possible
          </Form.Text>
        </Form.Group>
        <Form.Group className="form-group">  
          <button type="submit">Request</button>
        </Form.Group>
      </Form>
    </>
  )
}

export default ContactForm