import { useState } from 'react';

export const ItemForm = () => {
	const [item, setItem] = useState('');
	const [price, setPrice] = useState('');
	const [date, setDate] = useState('');

	const itemHandler = (e) => {
		setItem(e.target.value);
	};
	const dateHandler = (e) => {
		setPrice(e.target.value);
	};
	const priceHandler = (e) => {
		setDate(e.target.value);
	};

	return (
		<form>
			<input onChange={itemHandler} type='text' placeholder='Enter Item Name' />
			<input onChange={priceHandler} type='number' placeholder='Enter Amount' />
			<input
				onChange={dateHandler}
				type='date'
				min={'2016-01-01'}
				max={'2023-12-31'}
				placeholder='Choose Date'
			/>
			<button type='submit'>Add</button>
		</form>
	);
};



// By using one useState

import { useState } from 'react';

export const ItemForm2 = () => {
	useState({
		item: '',
		price: '',
		date: '',
	});

	// prevState will help to not lost other states while updating other
	const itemHandler = (e) => {
		setItem((prevState) => {
			return { ...prevState, item: e.target.value };
		});
	};

	const dateHandler = (e) => {
		setPrice((prevState) => {
			return { ...prevState, date: e.target.value };
		});
	};
	const priceHandler = (e) => {
		setDate((prevState) => {
			return { ...prevState, price: e.target.value };
		});
	};

	// we can also use shared function for those three function like this:

	const inputChangeHandler = (identifier, value) => {
		if (identifier === 'item') {
			setItem(value);
		} else if (identifier === 'price') {
			setPrice(value);
		} else {
			setDate(value);
		}
	};

	return (
		<form>
			<div>
				<label>Item</label>
				<input
					onChange={itemHandler}
					onInput={(e) => inputChangeHandler('item', e.target.value)}
					type='text'
					placeholder='Enter Item Name'
				/>
			</div>
			<div>
				<label>Price</label>
				<input
					onChange={priceHandler}
					type='number'
					placeholder='Enter Amount'
					onInput={(e) => inputChangeHandler('price', e.target.value)}
				/>
			</div>
			<div>
				<label>Date</label>
				<input
					onChange={dateHandler}
					type='date'
					min={'2016-01-01'}
					max={'2023-12-31'}
					placeholder='Choose Date'
					onInput={(e) => inputChangeHandler('date', e.target.value)}
				/>
			</div>
			<button type='submit'>Add</button>
		</form>
	);
};
