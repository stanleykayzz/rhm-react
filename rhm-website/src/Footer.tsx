import React from 'react';
import logoRhm from './logoRHM.png';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    // <div className='Footer'>
    //   Footer
    // </div>

      <Row className="fixed-bottom">
        <Container>
        <div className='col-md-3'>
          {/* <img src={logoRhm} id="bottom_image"></img> */}
            <p className="">Copyright © Résidence des Hauts de Menaye 2016</p>
        </div>
        </Container>
      </Row>
  );
}

export default Footer;
