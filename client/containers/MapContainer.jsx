//apiKey: 'AIzaSyAJdQ - ID6_clf4WGWk5F8bt3CnNMlHCXRs'\
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import MapComponent from '../components/MapComponent.jsx';
import Marker from '../components/Marker.jsx';
// when we have other components built out, remember to import them here

const MapContainer = () => {
	const render = (status) => {
		return <h1>{status}</h1>;
	};

	// const onMarkerClick = (event) => {
	// 	console.log('I was clicked', event);
	// 	return;
	// };

	// loop here and create array of markers

	return (
		<Wrapper apiKey={'AIzaSyAJdQ-ID6_clf4WGWk5F8bt3CnNMlHCXRs'} render={render}>
			<MapComponent>
				<Marker
					position={{
						lat: 40.69743317190694,
						lng: -73.93473004589146,
					}}
					// onClick={onMarkerClick}
					// {...props}
				/>
			</MapComponent>
		</Wrapper>
	);
};

export default MapContainer;