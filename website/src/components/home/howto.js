'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var HowToPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="howTo">
                <div className="container">
                    <h2>¿Cómo utilizar el extintor?</h2>
                    <Row>
                        <Col xs={12} sm={4}>
                            <div>
                                <h3 className="step-a">Retirar la anilla</h3>
                                <p>Quite el seguro girando y jalándolo</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div>
                                <h3>Presionar</h3>
                                <p>Sujete la manguera y oprima las manijas</p>
                            </div>
                            <div>
                                <h3>Dirigir el chorro</h3>
                                <p>Dirija la descarga a la  baae del fuego, verifica tu distancia según el tipo de extintor.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HowToPanel;
