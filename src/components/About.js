import React, { Component } from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

class About extends Component {
  render() {
    return (
      <Container>
        <Row className="">
          <p className="section-text">I'm a web developer from Uruguay, currently living in Auckland, New Zealand. I'm always looking forward to learning new things and taking new challenges.
          If you are looking for a new website or you need a web developer for your company you can get in touch with me <a href="#contact">here</a>.</p>
        </Row>
      </Container>
    );
  }
}

export default About;