'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var BannerCTAWidget = React.createClass({
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
            <div className="banner banner-products">
            	<div className="container">
                <h1>{this.props.title}</h1>
                <a href={this.state.STORE_URL} title="Ver todos los productos">Ver todos los productos</a>
               </div>
            </div>
        );
    }
});

module.exports = BannerCTAWidget;
