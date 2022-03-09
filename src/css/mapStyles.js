const mapStyles = [
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [
			{
				hue: '#ffaa00',
			},
			{
				saturation: '-33',
			},
			{
				lightness: '10',
			},
		],
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#9c5e18',
			},
		],
	},
	{
		featureType: 'landscape.natural.terrain',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.attraction',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.business',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.government',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.place_of_worship',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'labels.text',
		stylers: [
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'transit.line',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
			{
				saturation: '-23',
			},
			{
				gamma: '2.01',
			},
			{
				color: '#f2f6f6',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.stroke',
		stylers: [
			{
				saturation: '-14',
			},
		],
	},
];

export default mapStyles;
