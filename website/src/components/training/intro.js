'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var Intro = React.createClass({

    render: function() {

        return (
          <div className="container intro">
            <Row>
  	          <Col md={6}>
  	            <div className="first-panel">
  		          <p>Comprometidos con la <br />seguridad y tranquilidad <br /> de nuestros clientes.</p>
  		          <Link to="contact" title="contact">Contáctanos</Link>
  	            </div>
              </Col>
              <Col md={6}>
              	<div className="second-panel">
              	  <p>En Marcilla estamos comprometidos con la seguridad y tranquilidad de nuestros clientes, por lo que contamos con talleres de capacitación enfocados a la prevención de incendios en entornos laborales, los cuales son impartidos por instructores especializados en la operación de todo tipo de equipos contra incendios.
              	    <br/>Contáctenos para conocer más detalles y propocionarle información acerca del taller más adecuado a su empresa.
              	  </p>
              	</div>
              </Col>
          	</Row>
          </div>
        );
    }
});

module.exports = Intro;
