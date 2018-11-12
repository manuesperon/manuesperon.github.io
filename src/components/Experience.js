import React, { Component } from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      sticky: false,
      pastExperiences: [
        { company: 'Modelit', position: 'Full Stack Web Developer', period: 'Feb. 2018 - Sept. 2018', tasks: 'React + Redux SPA development, API development using Apex and Lightning Component published to the AppExchExchange.', technologies: ['React + Redux', 'Apex', 'Lightning Components', 'Aurelia', 'Java'] },
        { company: 'Portlike', position: 'Full Stack Web Developer', period: 'Nov. 2016 - Feb. 2018', tasks: 'Email templating using HTML & CSS and PHP/JS/MySQL development.', technologies: ['PHP', 'MySQL', 'JavaScript', 'Laravel', 'React + Redux'] }  
      ],
      education: [ 
        { institution: 'INEFOP', title: 'JavaScript & PHP Web Developer', period: 'Jan. 2016 - Sept. 2016' },
        { institution: 'Faculty of Engineering (FING - UDELAR)', title: 'Computer Engineering Degree', period: 'Jan. 2014 - Jan. 2017' },
        { institution: 'ISBO (UTU)', title: 'Bachelor in Computer Processing', period: 'Jan. 2010 - Jan. 2013' }
      ]
    };
  }

  render() {
    return (
      <VerticalTimeline animate>
        { this.state.pastExperiences.map((e, i) => (
          <VerticalTimelineElement 
            key={i}
            className="vertical-timeline-element--work"
            date={e.period}
            icon={<i className="exp-icon fas fa-briefcase"></i>}
            iconStyle={{ 'backgroundImage': '-webkit-linear-gradient(90deg, #f45622 0%, #f53e54 100%)', color: '#000' }}
          >
            <h3 className="vertical-timeline-element-title">{e.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{e.company}</h4>
            <p>
              <span>{e.tasks}</span>
            </p>
            <p>
              {e.technologies.map((technology, i) => (
                <span key={i}>{technology}{i !== e.technologies.length - 1 && ' | '}</span>
              ))}
            </p>
          </VerticalTimelineElement>
        ))}
        { this.state.education.map((e, i) => (
          <VerticalTimelineElement key={i}
            className="vertical-timeline-element--work"
            date={e.period}
            icon={<i className="exp-icon fas fa-graduation-cap"></i>}
            iconStyle={{ 'backgroundImage': '-webkit-linear-gradient(90deg, #f45622 0%, #f53e54 100%)', color: '#000' }}
          >
            <h3 className="vertical-timeline-element-title">{e.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{e.institution}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    )
  }
}

export default Experience;