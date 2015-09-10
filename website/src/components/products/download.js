'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var Download = React.createClass({

    render: function() {

        return (
            <div className="container download-section">
              <h3>Simbología de los tipos<br /> de fuego</h3>
              <p>Descarga nuestra tabla de simbología para los tipos de fuego.</p>
              <a href="" title="Descargar PDF">Descargar (pdf)</a>
            </div>
        );
    }
});

module.exports = Download;
