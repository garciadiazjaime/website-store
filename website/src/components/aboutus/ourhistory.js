'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var Ourhistory = React.createClass({

    render: function() {

        return (
        	<div className="container">
	            <Row>
	            	<Col xs={12}>
		            		<h3>Nuestra historia</h3>
		            	</Col>
	                <Col xs={12} sm={6}>
	                	
	                	<p>Fundada en 1957 por el Sr. C.P José Enrique Marcilla Segovia† , en un tiempo en el que la seguridad contra incendios empezaba a regularse, el fundador trabajando como contador público en aquella época, decide proporcionar a sus clientes con extintores que les permitieran cuplir con las regulaciones, iniciando quizá sin darse cuenta una empresa que hasta el día de hoy continúa operando con el mismo propósito; asegurar la tranquilidad y seguridad de sus clientes. </p>

						<p>No fue hasta 1985 que sus hijos al crecer junto con el negocio familiar decidieron continuar con el legado de su padre, expandiendo el alcance de la empresa con nuevos y modernos equipos contra incendios, así como atendiendo al secto industrial de Baja California.</p>

						<p>El compromiso con sus clientes, la calidad de sus productos y el servicio honesto y eficiente han convertido a <strong>Marcilla</strong> en el principal proveedor de extintores, equipo contra incendios y capacitación de la región Noroeste de México, estando a la altura de empresas internacionales.</p>
	                </Col>
	                <Col xs={12} sm={6}>
	                	<span className="woolworth"></span>
	                	<p className="red_text">“Por la tranquilidad de estar en buenas manos,la seguridad no tiene precio”.</p>
	                	<p>C.P José Enrique Marcilla Segovia †</p>
	                </Col>
	            </Row>
	        </div>
        );
    }
});

module.exports = Ourhistory;
