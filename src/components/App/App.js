import React, { Fragment } from 'react';
import MapboxMap from '../MapboxMap/MapboxMap';
import './App.css';
import mapboxConfig from '../../data/mapbox-config';


// Wildfires url
const mapDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/wildfires.json';

// map tiles & attribution
const mapboxStyle = 'mapbox://styles/mapbox/outdoors-v11';

// map options
const circleMarkerClassField = 'FIRE_STATU';
const mapDataSource = 'wildfires';
const windowWidth = window.innerWidth;

const mapOptions = {
	center: windowWidth > 400 ? [54.7, -93.98] : [58.2, -94.1],
	// see mapbox
	circleColours: [
		'match',
		['get', circleMarkerClassField],
		'New',
		'#DD2D25',
		'Out of Control',
		'#DD2D25',
		'Being Held',
		'#F26B21',
		'Under Control',
		'#0062A3',
		'Out',
		'steelblue',
		/* other */ '#F6B31C'
	],
	circleSizeMetric: 'CURRENT_SI', 
	classField: circleMarkerClassField,
	maxZoom: 8,
	minZoom: 3,
	zoom: windowWidth > 400 ? 2.75 : 2
}


function App() {
	return (
		<Fragment>
			<h2>Cumulative cases by health region</h2>
			<MapboxMap
				data={mapDataUrl}
				mapDataSource={mapDataSource}
				mapboxConfig={mapboxConfig}
				mapboxStyle={mapboxStyle}
				mapOptions={mapOptions}>
			</MapboxMap>
		</Fragment>
	);
}

export default App;
