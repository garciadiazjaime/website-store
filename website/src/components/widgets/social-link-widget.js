'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var SocialWidget = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    render: function() {

        return (
            <ul className="social">
                <li><a href="//facebook.com/marcillaextintores" title="Síguenos en facebooks" target="_blank"><span>Facebook</span></a></li>
            </ul>
        );
    }
});

module.exports = SocialWidget;
