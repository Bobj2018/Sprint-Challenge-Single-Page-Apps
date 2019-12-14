import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ characters, setCharacters ] = useState([]);
	const [ name, setName ] = useState('');

	useEffect(
		() => {
			// TODO: Add API Request here - must run in `useEffect`
			//  Important: verify the 2nd `useEffect` parameter: the dependencies array!
			axios
				.get(`https://rickandmortyapi.com/api/character?name=${name}`)
				.then((res) => {
					console.log(res);
					//
					setCharacters(res.data.results);
				})
				.catch((err) => console.log('Error: ', err));
		},
		[ name ]
	);

	function onSearch(charName) {
		setName(charName);
	}

	return (
		<div>
			<SearchForm characters={characters} onSearch={onSearch} />
			<ListGroup className='character-list'>
				{
					name ? <Redirect to={`/characters?name=${name}`} /> :
					<Redirect to={`/characters`} />}
				{characters.map((data) => <CharacterCard key={data.id} data={data} />)}
			</ListGroup>
		</div>
	);
}
