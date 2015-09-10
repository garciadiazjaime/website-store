'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

//===== SUBSECTIONS
var BannerCTAWidget = require('./widgets/banner-cta-widget');
var Category = require('./products/category');
var Download = require('./products/download');


var ProductSection = React.createClass({

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
            <div id="product-section">
                <div>
                    <BannerCTAWidget title="productos"/>
                    <div className="diagonales-roja"></div>
                </div>
                <Category className="category-extinguisher" category={1} />
                <Category className="category-equipment" category={2} />
                <Category className="category-accesories" category={3} />
                <Category className="category-signs" category={4} /> 
                <Download />
            </div>
        );
    }
});

module.exports = ProductSection;
