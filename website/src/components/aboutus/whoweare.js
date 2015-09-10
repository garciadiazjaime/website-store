'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var WhoWeAre = React.createClass({

    render: function() {

        return (
        	<div className="container">
	            <Row>
	            	<Col xs={12}>
	            		<h3>Quiénes somos</h3>
	            	</Col>
	            	<Col xs={12} sm={6}>
		                <p>Somos una empresa con más de 50 años de experiencia en el servicio y venta de equipos contra incendio y seguridad industrial, para empresas, comercios y particulares establecida en la ciudad de Tijuana, Baja California. 
		                </p>
		                <p>Pertencemos como socio activo a organismos internacionales como la NFPA - National Fire Protection Association y estamos respaldados por acreditaciones nacionales (NOM) e internacionales (UL).
		                </p>
		            </Col>
		            <Col xs={12} sm={6}>
		            	<span className="whoweare_img"></span>
		            </Col>
	            </Row>
	        </div>
        );
    }
});

module.exports = WhoWeAre;
