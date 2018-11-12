import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <Container>
        <Row>
          <img className="qr-code" src="https://chart.googleapis.com/chart?chs=300x300&amp;cht=qr&amp;chl=mailto:hello@manuesperon.com&amp;chld=L|1&amp;choe=UTF-8" alt="QR code"/>
        </Row>
        <Row>
          <Col>
            <div className="contact-details">
              <p className="section-text"><i className="fas fa-phone"></i> +64 027 2390492</p>
              <p className="section-text"><i className="fas fa-envelope"></i> <a href="mailto:hello@manuesperon.com">hello@manuesperon.com</a></p>
            </div>
          </Col>
        </Row>
        <Row className="social-media">
          <Col>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.linkedin.com/in/manuel-esperon-b9b301145/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-linkedin-in"></i></a></li>
              <li className="list-inline-item"><a href="https://github.com/manuesperon" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-github"></i></a></li>
              <li className="list-inline-item"><a href="https://www.last.fm/user/manuesperon" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-lastfm"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/manuesperon/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="https://soundcloud.com/manuelesperon" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-soundcloud"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;