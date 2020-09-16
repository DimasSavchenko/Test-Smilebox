import React from 'react';
import { observer } from 'mobx-react-lite';
import { default as bemCssModules } from 'bem-css-modules';

import { Loader } from '../Loader/Loader';
import { MoviesSearchStore } from '../../stores/MoviesSearchStore';
import { useMoviesSearchStore } from '../../stores/hooks';
import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { IMovie } from '../../models/IMovie';
import { default as MoviesListModuleCss } from './MoviesList.module.css';

const block = bemCssModules(MoviesListModuleCss);

const MoviesList = () => {
	const [isLoaded, setIsLoaded]: [boolean, Function] = React.useState(false);
	const [ searchResults, setSearchResults ]: [IMovie[], Function] = React.useState([]);
	const { moviesList, searchQuery }: MoviesSearchStore = useMoviesSearchStore();

	React.useEffect(() => {
		setSearchResults(moviesList);
		setIsLoaded(true);
	}, [ moviesList, searchQuery ]);

	if (!isLoaded) {
		return <Loader />;
	}

	return (
		<ul className={block()}>
			{searchResults.map((movie: IMovie, id: number) => (
				<MoviesListItem key={id} movie={movie} />
			))}
		</ul>
	);
};

export default observer(MoviesList);
