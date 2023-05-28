import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    // <div className='Footer'>
    //   Footer
    // </div>

      <Row className="fixed-bottom" style={{display: 'inline'}}>
        <Container className='col-md-3 mx-auto'>
        <div>
          {/* <img src={logoRhm} id="bottom_image"></img> */}
          Copyright © Résidence des Hauts de Menaye 2016
        </div>
        </Container>
      </Row>
  );
}

export default Footer;
