import React, { Component } from 'react';

class Section extends Component {

  constructor(props) {
    super(props);
    this.formatTitle = this.formatTitle.bind(this);
  }

  formatTitle(title) {
    let formattedTitle = '';
    for(let i = 0; i < title.length; i++) {
      formattedTitle += title.charAt(i).toUpperCase() + ' ';
    }
    return formattedTitle;
  }

  render() {
    return (
      <div className="section" id={this.props.title}>
        <div className="section-title">
          <h3>{this.formatTitle(this.props.title)}</h3>
        </div>
        <div className="section-subtitle">
          <p className="section-text">{this.props.subTitle}</p>
        </div>
        <div className="section-body">  
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;