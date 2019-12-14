import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'reactstrap';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ characters, setCharacters ] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependencies array!
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then((res) => {
				console.log(res);
				setCharacters(res.data.results);
			})
			.catch((err) => console.log('Error: ', err));
	}, []);

	return (
		<div>
			<SearchForm characters={characters} />
			<ListGroup className='character-list'>
				{characters.map((data) => <CharacterCard key={data.id} data={data} />)}
			</ListGroup>
		</div>
	);
}
