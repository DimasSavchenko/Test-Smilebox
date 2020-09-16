import React from 'react';
import { useAsyncEffect } from 'use-async-effect';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { MovieDetailsStore } from '../../stores/MovieDetailsStore';
import { useMovieDetailsStore } from '../../stores/hooks';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { Loader } from '../../components/Loader/Loader';

const MoviePage = () => {
	const [isLoaded, setIsLoaded]: [boolean, Function] = React.useState(false);
	const { movieDetails, loadMovieDetails }: MovieDetailsStore = useMovieDetailsStore();

	let { movieId } = useParams();

	useAsyncEffect(async (): Promise<void> => {
		await loadMovieDetails(movieId);
		setIsLoaded(true);
	}, []);

	if (!isLoaded) {
		return <Loader />;
	}

	return (
		<MovieDetails movieDetails={movieDetails} />
	)

};

export default observer(MoviePage);
