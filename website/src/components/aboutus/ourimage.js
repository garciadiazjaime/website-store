'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var Ourimage = React.createClass({

    render: function() {

        return (
        	<div className="container">
	        	<span className="logo_aboutus"></span>
	            <Row>
	                <Col xs={12} sm={8} smOffset={2}>
	                	<h2>Nuestra imagen</h2>
	                	<p className="ourimage"><strong>Marcilla</strong> tiene una gran historia y hemos decidido contarla de una nueva forma, nuestra imagen representa el pasado, presente y futuro de nuestra compañía, así como el firme compromiso que tenemos con nuestra comunidad y nuestras familias.<br /> Somos una empresa de clase internacional, avalada por los más altos estándares, regulaciones y acreditaciones de la industria, lo que asegura a nuestros clientes excelentes  productos y servicios.</p>
	                </Col>
	            </Row>
	        </div>
        );
    }
});

module.exports = Ourimage;
