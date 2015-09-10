'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var CTAProducts = React.createClass({
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


    render: function() {

        return (
            <div className="cta-products">
            	<div className="container">
                <h2>Productos</h2>
                <a href={this.state.STORE_URL} title="Ver catálogo" className="blueButtonArrow">Ver catálogo</a>
              </div>
            </div>
        );
    }
});

module.exports = CTAProducts;
