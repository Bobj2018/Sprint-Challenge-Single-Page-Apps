import React, { useState, useEffect } from 'react';

// import { withFormik, Field, Form } from 'formik';

export default function SearchForm({ characters, onSearch }) {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ searchResults, setSearchResults ] = useState(characters);

	useEffect(() => {}, [ searchTerm ]);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);

		const results = characters.filter((character) => {
			return character.name.toLowerCase().includes(searchTerm.toLowerCase());
		});

		onSearch(event.target.value.toLowerCase());

		const test = () => {
			searchTerm = 'search';
			console.log('search', searchTerm);
		};
	};

	return (
		<section className='search-form'>
			<form>
				<label htmlFor='search'>
					<input id='search' type='text' onChange={handleChange} value={searchTerm} />
				</label>
				<button>Submit</button>
			</form>
		</section>
	);
}
