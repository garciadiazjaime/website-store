'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

//===== SUBSECTIONS
var BannerWidget = require('./widgets/banner-widget');
var Intro = require('./training/intro');
var Workshops = require('./training/workshops');
var CTAProductsWidget = require('./widgets/ctaproducts-widget')


var TrainingSection = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('schedule');
    },

    handleChange: function(e){
        console.log('handleChange');
        // console.log(e.target.value);
    },

    render: function() {

        return (
            <div id="training-section">
                <BannerWidget title="capacitación"/>
                <div className="diagonales-roja"/>
                <Intro />
                <Workshops />
                <CTAProductsWidget />
            </div>
        );
    }
});

module.exports = TrainingSection;
