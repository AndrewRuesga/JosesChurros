import React, { useEffect, useState } from 'react';

export default function Menu2() {
	const [showComponent, setShowComponent] = useState(window.innerWidth > 764);

	useEffect(() => {
		// Function to update the showComponent state based on screen width
		const handleResize = () => {
			setShowComponent(window.innerWidth > 764);
		};

		// Add a listener for window resize events
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const comesWith = [
		`plates`,
		`forks`,
		`knives`,
		`napkins`,
		`cups`,
		`agua fresca`,
		`& choice of horchata or jamaica`,
	];

	const cateringMenu = [
		{
			title: 'Churros',
			cost: 8,
			options: ['Original', 'With Toppings'],
			includes: [
				`Cinnamon Sugar`,
				`Whip Cream`,
				`Chocolate`,
				`Strawberry`,
				`Caramel`,
			],
		},
		{
			title: 'Taco Bar',
			cost: 13,
			optionsCost: 2,
			options: ['Beef', 'Chicken', 'Pork', 'Adobada'],
			includes: [
				`Cilantro & onions`,
				`Tortillas & chips`,
				`Red salsa`,
				`Green salsa`,
				`Cucumbers`,
				`Lemons`,
				`Sour cream`,
				`Cheese`,
				`Beans`,
				`Rice`,
			],
		},
		{
			title: 'Enchilada Caserole',
			cost: 12,
			options: ['Chicken', 'Cheese'],
			includes: [`Lettuce`, `Sour cream`, `Beans`, `Rice`],
		},
		{
			title: 'Chicken Mole',
			cost: 18,
			includes: [`Rice`, `Beans`, `Tortillas`, `Tortilla Chips`],
		},
		{
			title: 'Bacon Wrapped Hot Dogs',
			cost: 12,
			includes: [
				`Tomatoes`,
				`Onions`,
				`Jalapenos`,
				`Grill bell peppers`,
				`Grill onions`,
				`Ketchup`,
				`Mustard`,
				`Mayonnaise`,
				`Sour cream`,
			],
		},
		{
			title: 'Chipotle Pork Loin',
			cost: 18,
			includes: [
				`Mashed potatoes`,
				`Mixed vegetables`,
				`Green salad with raspberry dressing`,
				`French bread`,
			],
		},
		{
			title: 'Chicken Cordon Bleu',
			cost: 18,
			includes: [
				`Mashed potatoes`,
				`Mixed vegetables`,
				`Green salad with raspberry dressing`,
				`French bread`,
			],
		},
		{
			title: 'Chicken Breast with Chipotle Cream',
			cost: 18,
			includes: [`Lime white rice`, `Mixed garlic vegetables`, `French bread`],
		},
	];

	const foodTruckMenu = [
		{
			title: 'Churros',
			cost: 5,
			options: ['Original', 'With Toppings'],
			includes: [
				`Cinnamon Sugar`,
				`Whip Cream`,
				`Chocolate`,
				`Strawberry`,
				`Caramel`,
			],
		},
		{
			title: 'Street Tacos',
			cost: 3,
			optionsCost: 2,
			options: ['Beef', 'Chicken', 'Pork', 'Adobada'],
			includes: [
				`Cilantro & onions`,
				`Tortillas & chips`,
				`Red salsa`,
				`Green salsa`,
				`Cucumbers`,
				`Lemons`,
				`Sour cream`,
				`Cheese`,
				`Beans`,
				`Rice`,
			],
		},
		{
			title: 'Burrito',
			cost: 12,
			options: ['Beef', 'Chicken', 'Pork', 'Adobada'],
			includes: [`Beans`, `Cheese`, `Avocado`, `Sour Cream`, `Pico de Gallo`],
		},
		{
			title: 'Cheese Quesadilla',
			cost: 6,
			includes: [`Big Flour Tortilla`, `Cheese`],
		},
		{
			title: 'Meat Quesadilla',
			cost: 12,
			options: ['Beef', 'Chicken', 'Pork', 'Adobada'],
			includes: [
				`Big Flour Tortilla`,
				`Cheese`,
				`Avocado`,
				`Sour Cream`,
				`Pico de Gallo`,
			],
		},
		{
			title: 'Tortas',
			cost: 12,
			options: ['Beef', 'Chicken', 'Pork', 'Adobada'],
			includes: [
				`Mayo`,
				`Beans`,
				`Cheese`,
				`Avocado`,
				`Lettuce`,
				`Pico de Gallo`,
			],
		},
		{
			title: 'Cup of Street Corn',
			cost: 5,
			includes: [`Butter`, `Mayo`, `Lime`, `Chile`, `Cojita Cheese`],
		},
		{
			title: 'Drinks',
			cost: '3 - $5',
			includes: [`Fiesta Agua Fresca`, `Canned Soda`, `Bottled Soda`],
		},
	];

	return (
		<div id="map">
			<h1>Our Menu</h1>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<div
					style={{
						fontSize: '1.8rem',
						paddingBottom: '20px',
						color: 'hsl(192, 97.1%, 26.7%)',
					}}
				>
					Catering
				</div>
				<div
					style={{
						fontSize: '1.8rem',
						paddingBottom: '20px',
						color: 'hsl(192, 97.1%, 26.7%)',
					}}
				>
					Food Truck
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					gap: showComponent ? 150 : 40,
				}}
			>
				<div className="grid-container">
					{cateringMenu.map(({ title, cost, includes, options }) => (
						<>
							<div style={{ paddingBottom: '30px' }}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'flex-end',
									}}
								>
									<h2
										style={{ marginTop: 0, marginBottom: '5px' }}
										className="grid-item col1"
									>
										{title}
									</h2>
									{options && showComponent && (
										<div style={{ fontSize: '0.9rem' }}>
											{options.join(' / ')}
										</div>
									)}
								</div>
								<div>{showComponent && includes.join(', ')}</div>
							</div>

							<div className="grid-item col2">${cost}</div>
						</>
					))}
				</div>

				<div className="grid-container">
					{foodTruckMenu.map(({ title, cost, includes, options }) => (
						<>
							<div style={{ paddingBottom: '30px' }}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'flex-end',
									}}
								>
									<h2
										style={{ marginTop: 0, marginBottom: '5px' }}
										className="grid-item col1"
									>
										{title}
									</h2>
									{options && showComponent && (
										<div style={{ fontSize: '0.9rem' }}>
											{options.join(' / ')}
										</div>
									)}
								</div>
								<div>{showComponent && includes.join(', ')}</div>
							</div>

							<div className="grid-item col2">${cost}</div>
						</>
					))}
				</div>
			</div>
			<div style={{ marginBottom: 0 }}>
				<div>*All catering orders come with {comesWith.join(', ')}</div>
				<div style={{ marginLeft: 8 }}>
					Two hour event, 50 people minimum, 20% deposit required,
					non-refundable
				</div>
			</div>
		</div>
	);
}
