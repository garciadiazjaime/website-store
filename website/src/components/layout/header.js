'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Nav = rb.Nav;
var Navbar = rb.Navbar;
var NavItem = rb.NavItem;
var Button = rb.Button;
var DropdownButton = rb.DropdownButton;
var CollapsibleNav = rb.CollapsibleNav;

var SocialWidget = require('./../widgets/social-link-widget');

var Button = rb.Button;
var Link = ReactRouter.Link;

var HeaderSection = React.createClass({

    mixins : [ReactRouter.Navigation],

    getInitialState: function(){
      return {
        STORE_URL: ''
      }
    },

    componentDidMount: function(){
      this.setState({
        STORE_URL: window.STORE_URL
      });
    },


    handleClick: function(){
        console.log('handleClick');
        this.transitionTo('inicio');
        this.transitionTo('nosotros');
        this.transitionTo('products');
        this.transitionTo('training');
        this.transitionTo('contacto');
    },

    render: function() {
        return (
            <Navbar brand={<Link to="home" title="Marcilla | Volver a inicio">Marcilla | Volver a inicio</Link>} toggleNavKey={0}  className="navbar-static-top">
                <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                  <Nav navbar>
                    <NavItem eventKey={1} href='/inicio' onClick={this.handleClick.bind(this, 'home')}>Inicio</NavItem>
                    <NavItem eventKey={3} href='/nosotros' onClick={this.handleClick.bind(this, 'aboutus')}>Nosotros</NavItem>
                    <NavItem eventKey={2} href='/productos' onClick={this.handleClick.bind(this, 'products')}>Productos</NavItem>
                    <NavItem eventKey={2} href='/capacitacion' onClick={this.handleClick.bind(this, 'training')}>Capacitación</NavItem>
                    <NavItem eventKey={4} href='/contacto' onClick={this.handleClick.bind(this, 'contact')}>Contacto</NavItem>
                  </Nav>
                </CollapsibleNav>
                <a href={this.state.STORE_URL + "/basket/"} id="shopping-cart"><span>Item in car</span></a>
                <SocialWidget />
            </Navbar>
        );
    }
});

module.exports = HeaderSection;
