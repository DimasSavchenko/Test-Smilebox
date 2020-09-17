import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { default as bemCssModules } from 'bem-css-modules';
import { debounce } from 'lodash';

import { MoviesSearchStore } from '../../stores/MoviesSearchStore';
import { useMoviesSearchStore } from '../../stores/hooks';
import { default as MoviesSearchModuleCss } from './MoviesSearch.module.css';
import { MIN_QUERY_LENGTH, MAX_QUERY_LENGTH } from '../../constants/numbers';

const block = bemCssModules(MoviesSearchModuleCss);

const MoviesSearchInput = () => {
	const {
		moviesList,
		loadMoviesSearchList,
		setSearchQuery,
		resetSearchQuery,
	}: MoviesSearchStore = useMoviesSearchStore();

	const [searchInput, setSearchInput]: [string, Function] = useState('');

	const debouncedLoadMovies = useCallback(debounce(query => loadMoviesSearchList(query), 500), []);

	const inputChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
		const query = e.target.value;
		setSearchInput(query);
		setSearchQuery(query);
		if (!query.length) {
			resetSearchQuery();
		}
		if (query.length > MIN_QUERY_LENGTH && query.length < MAX_QUERY_LENGTH) {
			await debouncedLoadMovies(query);
		}
	};

	let searchedMoviesTitle = null;
	if (moviesList.length) {
		searchedMoviesTitle = (
			<h1 className={block('title')}>List of searched movies</h1>
		);
	}	

	return (
		<div
			className={block()}
		>
			<input
				className={block('input')}
				type="text"
				placeholder="Search some movie"
				onChange={inputChange}
				value={searchInput}
			/>
			{searchedMoviesTitle}
		</div>
	);
};

export default observer(MoviesSearchInput);
