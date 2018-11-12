import React, { Component } from 'react';
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames'
import $ from 'jquery'

class Header extends Component {

  sectionDom;
  menuDom;
  menuTop;
  menuHeight;
  windowTop;
  headerHeight;

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      sticky: false,
      menuItems: [
        { text: 'ABOUT', href: '#about', active: false },
        { text: 'SKILLS', href: '#skills', active: false },
        { text: 'EXPERIENCE', href: '#experience', active: false },
        { text: 'CONTACT', href: '#contact', active: false },  
      ]
    };
  }
  
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.menuDom = $('#nav');
    this.windowTop = $(window).scrollTop();
    this.menuHeight = this.menuDom.height();
    this.headerHeight = $("#header").height();

    if (this.windowTop > this.headerHeight) {
      this.setState({ sticky: true })            
    }

    else {
      this.setState({ sticky: false })
    }
    
    let last;
    let menuItems = this.state.menuItems;

    menuItems.forEach((item) => {
      if (this.windowTop >= $(item.href).offset().top) {
          last = item;
      }
    })

    menuItems.forEach((item) => {
      item.active = item === last
    })
    this.setState({ menuItems });
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let classes = classnames({ sticky: this.state.sticky });
    let menuItems = this.state.menuItems.map((item, i) => {return(
      <NavItem key={i}>
        <NavLink onClick={this.toggle} className={classnames('menu-item-text', { active: item.active })} href={item.href}>{item.text}</NavLink>
      </NavItem>
    )});
    return (
      <div id="header"> 
        <div onScroll={this.handleScroll} id="sectionDom">
          <Navbar id='menuDom' fixed='top' light expand="md" className={classes}>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav id='nav' navbar> 
                {menuItems}  
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className='container'>
          <Row className='content'>
            <Col><img className='picture' src='../img/me.png' alt="Me"/></Col>
          </Row>
          <Row>
            <Col>
              <div>
                <p className="title">Manuel Esperon</p>
                <p className="subtitle">WEB DEVELOPER</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;