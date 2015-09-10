'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

//===== SUBSECTIONS
var BannerWidget = require('./widgets/banner-widget');
var Whoweare = require('./aboutus/whoweare');
var Ourcommitment = require('./aboutus/ourcommitment');
var Values = require('./aboutus/values');
var Ourhistory = require('./aboutus/ourhistory');
var Ourimage = require('./aboutus/ourimage');
var CTAProductsWidget = require('./widgets/ctaproducts-widget')


var AboutusSection = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    render: function() {

        return (
            <div id="aboutus">
                <BannerWidget title="marcilla e hijos"/>
                <div className="diagonales-roja"/>
                <Whoweare />
                <Ourcommitment />
                <Values />
                <Ourhistory />
                <Ourimage />
                <CTAProductsWidget />
            </div>
        );
    }
});

module.exports = AboutusSection;
