'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');
var CommitmentPanel = require('../block/commitment');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var Values = React.createClass({

    render: function() {

        return (
          <div>
            <div className="container">
              <Row>
                <Col xs={12} sm={4}>
                  <h4>Servicio</h4>
                  <span className="values_decoration"></span>
                  <p className="shorter">Nuestro servicio y atención inmediata a las necesidades de nuestros clientes, nos permiten estar siempre un paso adelante.</p>
                </Col>
                <Col xs={12} sm={4}>
                  <h4>Honestidad</h4>
                  <span className="values_decoration"></span>
                  <p className="shorter">La honestidad y el compromiso con nuestros clientes nos caracterizan, así como la ética y profesionalismo con la que ofrecemos nuestros servicios. </p>
                </Col>
                <Col xs={12} sm={4}>
                  <h4>Experiencia</h4>
                  <span className="values_decoration"></span>
                  <p className="shorter">Más de 50 años de experiencia en el servicio y venta de equipos y productos contra incendios nos respaldan</p>
                </Col>
              </Row>
            </div>
            <CommitmentPanel showCTA={false} />
          </div>
        );
    }
});

module.exports = Values;
