'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var HomeContactPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="homeContact">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={7}>
                            <h2>Solicitar servicio</h2>
                            <a href="tel:6646859090" title="Llámanos">
                                (664) 685 9090 <span>Llamar</span>
                            </a>
                        </Col>
                        <Col xs={12} sm={5}>
                            <Link to="products" title="Ver catálogo" className="redButtonDarkArrow">
                                Ver catálogo
                            </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeContactPanel;
