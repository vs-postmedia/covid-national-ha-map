import React from 'react';
import MapboxMap from '../MapboxMap/MapboxMap';
import './App.css';
import mapboxConfig from '../../data/mapbox-config';


// Wildfires url
const mapData = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/wildfires.json';

// map tiles & attribution
const mapboxStyle = 'mapbox://styles/mapbox/outdoors-v11';

// map options
const circleMarkerClassField = 'FIRE_STATU';
const mapDataSource = 'wildfires';
const mapOptions = {
	center: window.innerWidth > 400 ? [51.184179, -121.752423] : [52.184179, -121.752423],
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
	zoom: window.innerWidth > 400 ? 5 : 4
}


function App() {
	return (
		<MapboxMap
			data={mapData}
			mapDataSource={mapDataSource}
			mapboxConfig={mapboxConfig}
			mapboxStyle={mapboxStyle}
			mapOptions={mapOptions}>
		</MapboxMap>
	);
}

export default App;
