var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Layout = require('./components/layout');
var HomeSection = require('./components/home-section');
var AboutusSection = require('./components/aboutus-section');
var ProductsSection = require('./components/products-section');
var TrainingSection = require('./components/training-section');
var ContactUsSection = require('./components/contactus-section');

var routes = (
	<Route path="/" handler={Layout}>
		<DefaultRoute name="home" handler={HomeSection}/>
		<Route name="homepage" path="/inicio"  handler={HomeSection} />

		<Route name="aboutus" path="/nosotros" handler={AboutusSection} />
		<Route name="whoarewe" path="/nosotros/quienes-somos" handler={AboutusSection} />
		<Route name="ourcommitment" path="/nosotros/nuestro-compromiso" handler={AboutusSection} />
		<Route name="history" path="/nosotros/historia" handler={AboutusSection} />
		<Route name="ourimage" path="/nosotros/nuestra-imagen" handler={AboutusSection} />

		<Route name="products" path="/productos" handler={ProductsSection} />
		<Route name="extinguisher" path="/productos/extintores" handler={ProductsSection} />
		<Route name="equipment" path="/productos/equipo" handler={ProductsSection} />
		<Route name="accesories" path="/productos/accesorios" handler={ProductsSection} />
		<Route name="signs" path="/productos/senalamientos" handler={ProductsSection} />

		<Route name="training" path="/capacitacion" handler={TrainingSection} />
		<Route name="level1" path="/capacitacion/nivel-1" handler={TrainingSection} />
		<Route name="level2" path="/capacitacion/nivel-2" handler={TrainingSection} />

		<Route name="contact" path="/contacto" handler={ContactUsSection} />
	</Route>
);

module.exports = routes;