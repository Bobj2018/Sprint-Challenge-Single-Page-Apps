import React from 'react';
import Header from './components/Header.js';

import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import SearchForm from "./components/SearchForm";
import { Route } from 'react-router-dom';

export default function App() {
	return (
		<main>
      <Header />
     

			<Route exact path='/' render={(props) => <WelcomePage {...props} />} />
			<Route path='/characters' render={(props) => <CharacterList {...props} />} />
		</main>
	);
}
