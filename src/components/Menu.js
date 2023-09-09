import React from 'react';

export default function Menu() {
	const comesWith = [
		{
			title: `All Catering Orders Come With`,
			includes: [
				`Agua fresca`,
				`choice of Horchata or Jamaica`,
				`Plates`,
				`( platos desechable )`,
				`Forks `,
				`( tenedores )`,
				`Knives`,
				`( cuchillos )`,
				`Napkins`,
				`( servilletas )`,
				`Cups`,
				`( vasos desechable )`,
			],
		},
	];

	const menu = [
		{
			title: 'Churros',
			cost: 8,
			includes: [
				`Churros Original or with Toppings`,
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
				`Meats`,
				`( Carne )`,
				`Cilantro & onions`,
				`( Cebolla y cilantro )`,
				`Tortillas & chips`,
				`Red salsa`,
				`( Salsa roja )`,
				`Green salsa`,
				`( Salsa verde )`,
				`Cucumbers`,
				`( Pepinos )`,
				`Lemons`,
				`( Limones )`,
				`Sour cream`,
				`( Crema agria )`,
				`Cheese`,
				`( Queso )`,
				`Beans`,
				`( Frijoles )`,
				`Rice`,
				`( Arroz )`,
			],
		},
		{
			title: 'Enchilada Caserole',
			cost: 12,
			options: ['Chicken', 'Cheese'],
			includes: [
				`Enchiladas`,
				`Lettuce`,
				`( Lechuga )`,
				`Sour cream`,
				`( Crema agria )`,
				`Beans`,
				`( Frijoles )`,
				`Rice`,
				`( Arroz )`,
			],
		},
		{
			title: 'Chicken Mole',
			cost: 18,
			includes: [
				`CHICKEN MOLE `,
				`( Mole con pollo )`,
				`Rice`,
				`( Arroz )`,
				`Beans`,
				`( Frijoles )`,
				`Tortillas`,
				`Tortilla Chips`,
			],
		},
		{
			title: 'Bacon Wrapped Hot Dogs',
			cost: 12,
			includes: [
				`BACON HOT DOGS`,
				`( Perros calientes envueltos en tocino )`,
				`Tomatoes`,
				`( Jitomate )`,
				`Onions`,
				`( Cebolla )`,
				`Jalapenos`,
				`( Chile jalapeno )`,
				`Grill bell peppers`,
				`( Pimientos a la parrilla )`,
				`Grill onions`,
				`( Cebolla a la parrilla )`,
				`Ketchup`,
				`( Salsa de tomate )`,
				`Mustard`,
				`( Mostaza )`,
				`Mayonnaise`,
				`( Mayoneza )`,
				`Sour cream`,
				`( Crema agria )`,
			],
		},
		{
			title: 'Chipotle Pork Loin',
			cost: 18,
			includes: [
				`CHIPOTLE PORK LOIN WRAPPED WITH BACON`,
				`( Lomo en chipotle envuelto con tocino )`,
				`Mashed potatoes`,
				`( Pure de papa )`,
				`Mixed vegetables`,
				`( Verduras mixtas )`,
				`Green salad with raspberry dressing`,
				`( Ensalada verde con aderezo de frambuesa )`,
				`French bread`,
				`( Pan frances )`,
			],
		},
		{
			title: 'Chicken Cordon Bleu',
			cost: 18,
			includes: [
				`CORDON BLEU CHICKEN`,
				`( Cordon azul pollo )`,
				`Mashed potatoes`,
				`( Pure de papa )`,
				`Mixed vegetables`,
				`( Verduras mixtas )`,
				`Green salad with raspberry dressing`,
				`( Ensalada verde con aderezo de frambuesa )`,
				`French bread`,
				`( Pan frances )`,
			],
		},
		{
			title: 'Chicken Breast with Chipotle Cream',
			cost: 18,
			includes: [
				`Chicken Breast With Chipotle Cream`,
				`( Pechuga de pollo con crema de chipotle )`,
				`Lime white rice`,
				`( Arroz blanco con limon )`,
				`Mixed garlic vegetables`,
				`( Verduras con ajo mixtas )`,
				`French bread`,
				`( Pan frances )`,
			],
		},
	];

	return (
		<div id="map">
			<div className="ourCarts">
				<h2>Our Catering Menu</h2>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						flexWrap: 'wrap',
					}}
				>
					{menu.map(({ title, cost, includes, options, optionsCost }, id) => (
						<div
							key={title}
							style={{
								// borderRight: id !== menu.length - 1 ? '1px grey solid' : null,
								paddingLeft: '1rem',
								display: 'flex',
								flexDirection: 'column',
								paddingRight: '1rem',
								flexWrap: 'wrap',
								marginTop: '2rem',
							}}
						>
							<p
								style={{
									paddingRight: '1rem',
									paddingBottom: '0.5rem',
									alignSelf: 'center',
									fontFamily: 'Monoton',
									color: 'hsl(29, 98.9%, 36.3%)',
								}}
							>
								{title}
							</p>
							<p
								style={{
									paddingBottom: '0.5rem',
									color: 'hsl(192, 97.1%, 26.7%)',
								}}
							>
								Cost: ${cost}
							</p>
							<p>
								Includes:
								{includes.map((include, id) => (
									<p
										key={include}
										style={{
											paddingBottom: '0.5rem',
										}}
									>
										{include.split(' ')[0] === '(' ? null : '•'}
										{include
											.toLowerCase()
											.split(' ')
											.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
											.join(' ')}
									</p>
								))}
							</p>
							{options ? (
								<p>
									Additional Options:{' '}
									{optionsCost ? `$${optionsCost} Extra` : null}
									<p style={{ display: 'flex', flexDirection: 'row' }}>
										{options.map((option) => (
											<p key={option} style={{ paddingRight: '1rem' }}>
												{option}
											</p>
										))}
									</p>
								</p>
							) : null}
						</div>
					))}
					{comesWith.map(
						({ title, cost, includes, options, optionsCost }, id) => (
							<div
								key={title}
								style={{
									paddingLeft: '1rem',
									display: 'flex',
									flexDirection: 'column',
									paddingRight: '1rem',
									flexWrap: 'wrap',
									marginTop: '2rem',
								}}
							>
								<p
									style={{
										paddingRight: '1rem',
										paddingBottom: '0.5rem',
										alignSelf: 'center',
										fontFamily: 'Monoton',
										color: 'hsl(192, 97.1%, 26.7%)',
									}}
								>
									{title}
								</p>
								<p>
									{includes.map((include, id) => (
										<p
											key={include}
											style={{
												paddingBottom: '0.5rem',
											}}
										>
											{include.split(' ')[0] === '(' ? null : '•'}
											{include
												.toLowerCase()
												.split(' ')
												.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
												.join(' ')}
										</p>
									))}
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
