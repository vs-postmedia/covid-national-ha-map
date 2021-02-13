import Axios from 'axios';
import React, { Component } from 'react';
import CircleMap from '../CircleMap/CircleMap';
import './MapboxMap.css';



export class MapBoxMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data_all: [],
			data_display: []
		}
	}	

	componentDidMount() {
		Axios.get(this.props.data)
			.then(resp => {
				// update our state with the new data
				this.setState({
					data_all: resp.data,
					data_display: resp.data,
				});
			});
	}

	render() {
		return (
			<CircleMap
				center={this.props.mapOptions.center}
				circleColours={this.props.mapOptions.circleColours}
				circleMarkerClassField={this.props.mapOptions.classField}
				circleSizeMetric={this.props.mapOptions.circleSizeMetric}
				config={this.props.mapboxConfig}
				container="mapview"
				data={this.state.data_display}
				data_all={this.state.data_all}
				mapboxStyle={this.props.mapboxStyle}
				mapDataSource={this.props.mapDataSource}
				maxZoom={this.props.mapOptions.maxZoom}
				minZoom={this.props.mapOptions.minZoom}
				zoom={this.props.mapOptions.zoom}>
			</CircleMap>
		);
	}
}

export default MapBoxMap;
