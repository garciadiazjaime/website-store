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
            <i className="icon-facebook">
                <span></span>
            </i>
        );
    }
});

module.exports = SocialWidget;
