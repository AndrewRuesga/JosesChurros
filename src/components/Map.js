import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import Geocode from 'react-geocode';
import mapStyles from '../css/mapStyles';
import logo from '../images/joseschurros.png';
import compass from '../images/compass.png';

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

Geocode.setApiKey(MAP_API_KEY);

const libraries = ['places'];

const mapContainerStyle = {
	width: '50vw',
	height: '50vh',
};

const center = {
	lat: 33.5539,
	lng: -117.2139,
};

const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
};

const Map = () => {
	const [markers, setMarkers] = React.useState([]);
	const [selected, setSelected] = React.useState(null);
	const [address, setAddress] = React.useState([]);
	const [position, setPosition] = React.useState([]);

	const openCart = () => {
		let coords = navigator.geolocation.getCurrentPosition(
			createMarker,
			() => null
		);
		return coords;
	};

	const closeCart = () => {
		// const myPosition = (marker) =>
		// 	marker.lat.toFixed(3) === position.coords.latitude.toFixed(3);

		// let found = markers.findIndex(myPosition);

		// let remove = markers.splice(found, 1);
		// markers = remove;
		// setMarkers(markers.splice(found, 1));
		setMarkers([]);
	};

	const createMarker = React.useCallback((position) => {
		let lat = position.coords.latitude;
		let lng = position.coords.longitude;

		Geocode.fromLatLng(lat, lng).then((response) => {
			setAddress((current) => [...current, response.results[0]]);
		});

		setPosition(position);

		setMarkers((current) => [
			...current,
			{
				lat,
				lng,
				time: new Date(),
			},
		]);
	}, []);

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
	}, []);

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: MAP_API_KEY,
		libraries,
	});
	if (loadError) return 'Error loading maps';
	if (!isLoaded) return 'Loading Maps';

	return (
		<div id="map">
			<div className="googleMap">
				<Locate panTo={panTo} />
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					zoom={9}
					center={center}
					options={options}
					onLoad={onMapLoad}
				>
					{markers.map((marker) => (
						<Marker
							key={marker.time.toISOString()}
							position={{ lat: marker.lat, lng: marker.lng }}
							icon={{
								url: logo,
								scaledSize: new window.google.maps.Size(35, 35),
								origin: new window.google.maps.Point(0, 0),
								anchor: new window.google.maps.Point(15, 15),
							}}
							onClick={() => {
								setSelected((curMarker) => {
									curMarker = marker;
									let latMarker = marker.lat.toFixed(3);
									let lngMarker = marker.lng.toFixed(3);
									let singleAddress = address.map((singleAddress) => {
										let latAddress =
											singleAddress.geometry.location.lat.toFixed(3);
										let lngAddress =
											singleAddress.geometry.location.lng.toFixed(3);
										let streetAddress = singleAddress.formatted_address;
										if (latAddress === latMarker && lngAddress === lngMarker)
											return streetAddress;
									});
									curMarker.streetAddress = singleAddress;

									return curMarker;
								});
							}}
						/>
					))}
					{selected ? (
						<InfoWindow
							position={{ lat: selected.lat, lng: selected.lng }}
							onCloseClick={() => {
								setSelected(null);
							}}
						>
							<div>
								<h2>Cart Active</h2>
								<p>Open {formatRelative(selected.time, new Date())}</p>
								<p>Located at:</p>
								<p> {selected.streetAddress}</p>
							</div>
						</InfoWindow>
					) : null}
				</GoogleMap>
			</div>

			<div className="cartCheckin">
				<button
					onClick={() => {
						openCart();
					}}
				>
					Cart Open
				</button>
				<button
					onClick={() => {
						closeCart();
					}}
				>
					Cart Closed
				</button>
			</div>

			<div className="ourCarts">
				<h2>Our Carts</h2>
				<p>Vintage inspired and custom ordered from Guadalajara,</p>{' '}
				<p>Mexico. Luckily, you don't have to travel all the way to</p>{' '}
				<p>Jose's hometown for a taste of our delicious churros.</p>
				<p>
					Our interactive map show's which carts are active right
					<p>here in Sunny Southern California.</p>
				</p>
				<h2>Carts Active: {markers.length}</h2>
			</div>
		</div>
	);
};

function Locate({ panTo }) {
	return (
		<button
			className="compass"
			onClick={() => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						panTo({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
					},
					() => null
				);
			}}
		>
			<img src={compass} alt="compass - locate me" />
		</button>
	);
}

export default Map;
