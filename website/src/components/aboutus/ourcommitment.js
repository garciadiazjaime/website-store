'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var Ourcommitment = React.createClass({

    render: function() {

        return (
             <div className="container">
                <span className="historic_logo"></span>
                <Row>
                    <Col xs={12} sm={10} smOffset={2}>
                        <h2>Nuestro compromiso</h2>
                        <p className="compromiso">
                            Promover la prevención de incendios a través de la venta y mantenimiento de equipos de seguridad, extintores y servicios de capacitación para la industria, el comercio y los particulares de Baja California. 
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Ourcommitment;
