'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var Icon = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    render: function() {

        return (
            <i className={this.props.className}>
            </i>
        );
    }
});

module.exports = Icon;
