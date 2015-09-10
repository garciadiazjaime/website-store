'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var Link = ReactRouter.Link;

var HomeSectionsPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="homeSections">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={3}>
                            <Link to="extinguisher" title="Extintores" id="homeSections-extinguishers">
                                <h4>Extintores</h4>
                                <p>Polvo Químico Seco, Halotrón, CO2, Agua, Espuma y Especiales</p>
                            </Link>
                        </Col>
                        <Col xs={12} sm={3}>
                            <Link to="equipment" title="Extintores" id="homeSections-equipment">
                                <h4>Equipo</h4>
                                <p>Equipo de Bombero, Equipo de seguridad, detección y emergencia </p>
                            </Link>
                        </Col>
                        <Col xs={12} sm={3}>
                            <Link to="accesories" title="Extintores" id="homeSections-accesories">
                                <h4>Accesorios</h4>
                                <p>PMangueras, Herrajes, <br />Gabinetes,  Soportes</p>
                            </Link>
                        </Col>
                        <Col xs={12} sm={3}>
                            <Link to="signs" title="Extintores" id="homeSections-signs">
                                <h4>Señalamientos</h4>
                                <p>Señales de emergencia y preventivas</p>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeSectionsPanel;
