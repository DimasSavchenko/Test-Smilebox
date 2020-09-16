import React from 'react';

import { StoreContext } from './StoreProvider';
import { RootStore } from './RootStore';
import { MoviesSearchStore } from './MoviesSearchStore';
import { MovieDetailsStore } from './MovieDetailsStore';

const useRootStore = (): RootStore => {
	const rootStore = React.useContext(StoreContext);
	if (!rootStore) {
		throw new Error('Missing RootStore provider');
	}

	return rootStore;
};

export const useMoviesSearchStore = (): MoviesSearchStore => {
	const rootStore = useRootStore();

	return rootStore.moviesSearchStore;
};


export const useMovieDetailsStore = (): MovieDetailsStore => {
	const rootStore = useRootStore();

	return rootStore.movieDetailsStore;
};
