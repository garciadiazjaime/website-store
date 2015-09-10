'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var ContactInfo = require('./contactus/info');
var BasicBlock = require('./block/simple-block')

var ContactSection = React.createClass({

    mixins : [ReactRouter.Navigation],

    getInitialState: function(){
        return {
        }
    },
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    render: function() {
        return (
            <div id="contact">
                <BasicBlock>Contacto</BasicBlock>
                <ContactInfo />
            </div>
        );
    },
});

module.exports = ContactSection;
