import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';

export default function Contact() {

  return (

    <Container className='col-md-10 mx-auto'>

      <div className='Contact '>

        <div className="">
      <div  className='col-md-1 mx-auto'>

          Contact </div>
        

          <p>Pour nous contacter, veuillez remplir le formulaire ci-dessous et envoyez nous votre message. Nous nous efforcerons de vous répondre dans un délai de 24h</p>
           {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. 
           WARNING: Scontroller web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! 
           NOTE: To use the contact form, your site must be on a lcontroller web host with PHP! The form will not work locally!  */}
          {/* <form name="sentMessage" id="contactForm" noValidate="">
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Nom" id="name_contact" required="" data-validation-required-message="Please enter your name.">
                  <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Adresse email" id="email_contact" required="" data-validation-required-message="Please enter your email address.">
                  <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="Tél" id="phone_contact" required="" data-validation-required-message="Please enter your phone number.">
                  <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" className="form-control" placeholder="Message" id="message_contact" required="" data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br>
              <div id="success"></div>
              <div className="row">
                <div className="form-group col-xs-12">
                  <button type="submit" id="btn_contact" className="btn btn-default">Send</button>
                </div>
              </div>
          </form> */}
          
{/* sdgd
gdsgdfgfd
dfgdf */}



    <Form>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Control type="text" placeholder="Nom et prénom" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Control type="tel" placeholder="Tél." />
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Saisissez votre message"
          style={{ height: '300px' }}
        />
      </FloatingLabel>
      <br></br>
      {/* <div  className='col-md-3 mx-auto'> */}
      <div>
      <Button variant="primary" type="submit">
        Envoyez
      </Button></div>
    </Form>
        </div>
      </div>
    </Container>
  );
}
