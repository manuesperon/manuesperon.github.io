import React, { Component } from 'react';
import {
  Container,
  Row
} from 'reactstrap';

class Skills extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="skill-item">
            <img src='../img/html5.svg' alt="HTML5"/>
          </div>
          <div className="skill-item">
            <img src='../img/css3.svg' alt="CSS3"/>
          </div>
          <div className="skill-item">
            <img src='../img/react.svg' alt="ReactJS"/>
          </div>
          <div className="skill-item">
            <img src='../img/jquery.svg' alt="JQuery"/>
          </div>
        </Row>
        <Row>
          <div className="skill-item">
            <img src='../img/php.svg' alt="PHP"/>
          </div>
          <div className="skill-item">
            <img src='../img/mysql.svg' alt="MySQL"/>
          </div>
          <div className="skill-item">
            <img src='../img/node.svg' alt="NodeJS"/>
          </div>
          <div className="skill-item">
            <img src='../img/mongodb.svg' alt="MongoDB"/>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Skills;