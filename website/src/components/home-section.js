'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var CarouselPanel = require('./home/carousel');
var ServicesPanel = require('./home/services');
var ContactPanel = require('./home/contact');
var CommitmentPanel = require('./block/commitment');
var HowToPanel = require('./home/howto');
var TrainingPanel = require('./home/training');

var HomeSection = React.createClass({

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
            <div>
                <CarouselPanel />
                <ServicesPanel />
                <ContactPanel />
                <CommitmentPanel showCTA={true}/>
                <HowToPanel />
                <TrainingPanel />
            </div>
        );
    }
});

module.exports = HomeSection;
