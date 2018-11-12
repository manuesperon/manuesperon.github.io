import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/manuesperon" target="_blank" rel="noopener noreferrer"><p className="footer-text">Click here to find out how this site was made &nbsp;<i className="footer-icon fab fa-github"></i></p></a>
        <p className="footer-text">&copy; {new Date().getFullYear()} Manuel Esperon </p>
      </div>
    );
  }
}

export default Footer;