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
import '../css/map.css';

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

Geocode.setApiKey(MAP_API_KEY);

const libraries = ['places'];

const mapContainerStyle = {
	width: '90vh',
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
		const myPosition = (marker) =>
			marker.lat.toFixed(3) === position.coords.latitude.toFixed(3);

		let found = markers.findIndex(myPosition);

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
		<div>
			<button
				className="openButton"
				onClick={() => {
					openCart();
				}}
			>
				Cart Open
			</button>

			<button
				className="closedButton"
				onClick={() => {
					closeCart();
				}}
			>
				Cart Closed
			</button>

			<h3 className="activeCarts">Active Carts: {markers.length}</h3>

			<div>
				<Locate panTo={panTo} />
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					zoom={9}
					center={center}
					options={options}
					onLoad={onMapLoad}
					className="map"
				>
					{markers.map((marker) => (
						<Marker
							key={marker.time.toISOString()}
							position={{ lat: marker.lat, lng: marker.lng }}
							icon={{
								url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2016%2F07%2F14%2Fi-z492vM6-L.jpg',
								scaledSize: new window.google.maps.Size(30, 30),
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
										if (latAddress == latMarker && lngAddress == lngMarker)
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
								<h3>Cart Active</h3>
								<p>Open {formatRelative(selected.time, new Date())}</p>
								<p>Located at:</p>
								<p> {selected.streetAddress}</p>
							</div>
						</InfoWindow>
					) : null}
				</GoogleMap>
			</div>
		</div>
	);
};

function Locate({ panTo }) {
	return (
		<button
			className="locate"
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
			<img
				src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/compass.png"
				alt="compass - locate me"
			/>
		</button>
	);
}

export default Map;
