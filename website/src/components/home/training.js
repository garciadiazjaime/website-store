'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var TrainingPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="training">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <span id="trainingImg">Capacítate con nosotros</span>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="wrap">
                                <h2>Capacitación <br />y talleres</h2>
                                <p>Conoce acerca del fuego y aprende a operar de forma correcta un extintor portátil y los equipos contra incendio.</p>
                                <Link to="training" title="Ver programas" className="redButton">Ver programas</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = TrainingPanel;
