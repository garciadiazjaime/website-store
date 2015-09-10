'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var CommitmentPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="commitment">
                <div className="smallContainer">
                    <p>Compromiso con historia <em>Estación 1957</em></p>
                    {
                        this.props.showCTA ?
                        <Link to="aboutus" title="Conócenos" className="redButton">
                            Conócenos
                        </Link> : null
                    }
                </div>
            </section>
        );
    }
});

module.exports = CommitmentPanel;
