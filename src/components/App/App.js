import React, { Fragment } from 'react';
import MapboxMap from '../MapboxMap/MapboxMap';
import './App.css';
import mapboxConfig from '../../data/mapbox-config';


// Wildfires url
// const mapDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/wildfires.json';
const mapDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-hr-cases.json';


// map tiles & attribution
// const mapboxStyle = 'mapbox://styles/mapbox/outdoors-v11';
const mapboxStyle = 'mapbox://styles/ngriffiths-postmedia/ckl2widct1euv17mkqgsryqff';

// map options
const circleMarkerClassField = 'cumulative_cases';
const mapDataSource = 'data-layer';
const windowWidth = window.innerWidth;

const mapOptions = {
	center: windowWidth > 400 ? [54.7, -93.98] : [58.2, -94.1],
	// see mapbox
	circleColours: '#0062A3',
	circleSizeMetric: 'cases_100k', 
	classField: circleMarkerClassField,
	maxZoom: 8,
	minZoom: 3,
	zoom: windowWidth > 400 ? 2.75 : 1.75
}


function App() {
	return (
		<Fragment>
			<h2>COVID-19 cases per 100,000 people, by health region</h2>
			<MapboxMap
				data={mapDataUrl}
				mapDataSource={mapDataSource}
				mapboxConfig={mapboxConfig}
				mapboxStyle={mapboxStyle}
				mapOptions={mapOptions}>
			</MapboxMap>
			<p className="source">Source: <a href="https://opencovid.ca" target="_blank" rel="noopener noreferrer">COVID-19 Canada Open Data Working Group</a></p>
		</Fragment>
	);
}

export default App;
