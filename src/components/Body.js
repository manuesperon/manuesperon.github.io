import React, { Component } from 'react';

import Section from './Section';
import Skills from './Skills';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Section title="about" subTitle="A small introduction about myself">
          <About />
        </Section>
        <Section title="skills" subTitle="These are the tools that have helped me throughout the years">
          <Skills />
        </Section>
        <Section title="experience" subTitle="My previous jobs and qualifications">
          <Experience />
        </Section>
        <Section title="contact" subTitle="You can scan this QR code to get my contact details">
          <Contact />
        </Section>
      </div>
    );
  }
}

export default Body;