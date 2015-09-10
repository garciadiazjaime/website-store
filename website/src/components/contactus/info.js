'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var ContactForm = require('./form');
var FacebookIcon = require('../icons/facebook-icon');
var Icon = require('../icons/icon');

var HelloPanel = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    render: function() {

        return (
            <section id="contactInfo">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={6}>
                            <h2>Información de Contacto</h2>
                            <Row>
                                <ul className="contact-data">
                                    <li>
                                        <div>
                                            <Icon className="icon-map"/>
                                            <p>Calle Galeana No. 1650 <br />Zona Centro, Tijuana, B.C.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Icon className="icon-tel"/>
                                            <p><a href="tel:6646859090" title="Llámanos">(664) 685 9090</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Icon className="icon-email"/>
                                            <p><a href="mailto:ventas@marcilla.com.mx" title="escríbenos">ventas@marcilla.com.mx</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FacebookIcon />
                                            <p><a href="//facebook.com/marcillaextintores" target="_blank">facebook.com/marcillaextintores</a></p>
                                        </div>
                                    </li>
                                </ul> 
                            </Row>
                        </Col>
                        <Col xs={12} sm={6} id="contactform">
                            <ContactForm />   
                        </Col>
                    </Row>
                </div>
                <div id="map">
                    <a href="https://www.google.com.mx/maps/place/M%C3%A9rida+258,+Centro,+22020+Tijuana,+B.C./@32.504227,-117.006552,3a,75y,175.81h,87.89t/data=!3m7!1e1!3m5!1sa65UfHiwBKuU5IeeJkz-5w!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fcb_client%3Dmaps_sv.tactile%26output%3Dthumbnail%26thumb%3D2%26panoid%3Da65UfHiwBKuU5IeeJkz-5w%26w%3D374%26h%3D75%26yaw%3D224%26pitch%3D0%26thumbfov%3D120%26ll%3D32.504227,-117.006552!7i13312!8i6656!4m15!1m12!4m11!1m6!1m2!1s0x80d9481f28d30061:0xdc08723940ef1927!2sM%C3%A9rida+254,+Centro,+22020+Tijuana,+B.C.!2m2!1d-117.0062013!2d32.5042379!1m3!2m2!1d-117.0065037!2d32.5041818!3m1!1s0x80d9481f31d5e301:0xdc44b3248c9874f2!6m1!1e1" target="_blank" title="Ver en google maps">
                        <span>Ver en google maps</span>
                    </a>
                </div>
            </section>
        );
    }
});

module.exports = HelloPanel;
