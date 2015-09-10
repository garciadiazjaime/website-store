'use strict';

var React = require('react');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;


var Category = React.createClass({
    getInitialState: function(){
      return {
        STORE_URL: '',
        CATEGORY_URL: [
          '/catalogue/category/extintores_1/',
          '/catalogue/category/equipo_2/',
          '/catalogue/category/accesorios_3/',
          '/catalogue/category/senalamientos_4/'
        ],
        CATEGORY_TITLE:[
          'extintores',
          'equipo',
          'accesorios',
          'señalamientos'
        ] 
      }
    },

    componentDidMount: function(){
      this.setState({
        STORE_URL: window.STORE_URL
      });
    },

    render: function() {

        return (
          <Row className="product-category">
            <Col md={7} className={this.props.className}>
              <div className="twoColumns-wraper-75">
                <h2>{this.state.CATEGORY_TITLE[this.props.category-1]}</h2>
                <i className="icon-extinguisher"></i>
              </div>
            </Col>
            <Col md={5}>
              <div className="twoColumns-wraper-25">
                <ul>
                  <li><span>polvo químic seco</span></li>
                  <li><span>halotrón</span></li>
                  <li><span>co2</span></li>
                </ul>
                <a href={this.state.STORE_URL + this.state.CATEGORY_URL[ this.props.category-1 ]} title="products">ver {this.state.CATEGORY_TITLE[this.props.category-1]}</a>
              </div>
            </Col>
          </Row>
        );
    }
});

module.exports = Category;
