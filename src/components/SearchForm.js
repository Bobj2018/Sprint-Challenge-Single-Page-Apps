import React, { useState, useEffect } from 'react';
// import { withFormik, Field, Form } from 'formik';

export default function SearchForm({ characters }) {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ searchResults, setSearchResults ] = useState(characters);

	useEffect(() => {}, [ searchTerm ]);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);

		const results = characters.filter((character) => {
			return character.name.toLowerCase().includes(searchTerm.toLowerCase());

			setSearchResults(results);
		});

		const test = () => {
			searchTerm = 'search';
			console.log('search', searchTerm);
		};
	};

	return (
		<section className='search-form'>
			<p>{searchTerm}</p>
			<form>
				<label htmlFor='search'>
					<input id='search' type='text' onChange={handleChange} value={searchTerm} />
				</label>
				<button>Submit</button>
			</form>
			{searchResults.map((character) => {
				return <li key={character}>{character}</li>;
			})}
		</section>
	);
}
