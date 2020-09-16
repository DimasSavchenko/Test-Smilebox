import React from 'react';

import MoviesSearchInput from '../../components/MoviesSearchInput/MoviesSearchInput';
import MoviesList from '../../components/MoviesList/MoviesList';

export const LandingPage: React.FC = () => (
		<>
			<MoviesSearchInput />
			<MoviesList />
		</>
);
