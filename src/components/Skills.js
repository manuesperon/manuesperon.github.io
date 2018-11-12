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
            <img src='../html5.svg' alt="HTML5"/>
          </div>
          <div className="skill-item">
            <img src='../css3.svg' alt="CSS3"/>
          </div>
          <div className="skill-item">
            <img src='../react.svg' alt="ReactJS"/>
          </div>
          <div className="skill-item">
            <img src='../jquery.svg' alt="JQuery"/>
          </div>
        </Row>
        <Row>
          <div className="skill-item">
            <img src='../php.svg' alt="PHP"/>
          </div>
          <div className="skill-item">
            <img src='../mysql.svg' alt="MySQL"/>
          </div>
          <div className="skill-item">
            <img src='../node.svg' alt="NodeJS"/>
          </div>
          <div className="skill-item">
            <img src='../mongodb.svg' alt="MongoDB"/>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Skills;