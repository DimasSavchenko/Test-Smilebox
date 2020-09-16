import React from 'react';
import { Link } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';

import { IMovie } from '../../models/IMovie';
import { default as MoviesListItemModuleCss } from './MoviesListItem.module.css';

const block = bemCssModules(MoviesListItemModuleCss);

interface IMoviesListItemProps {
	movie: IMovie;
}

const MoviesListItem = ({
	movie
}: IMoviesListItemProps) => {
	let link = '';
	if (link !== undefined) {
		link = `${movie.imdbID}`;
	}

	const noPosterModifier = movie.Poster === 'N/A';

	let posterImage = null;
	if (noPosterModifier) {
		posterImage = (
			<span
				className={block('image-no-poster')}>
				No image
			</span>
		);
	} else {
		posterImage = (
			<img
				className={block('image')}
				src={movie.Poster}
				alt="poster image"
			/>
		);
	}

	return (
		<li className={block()}>
			<Link to={link} className={block('link')}>
				<div className={block('poster')}>{posterImage}</div>
				<p className={block('title')}>{movie.Title}</p>
			</Link>
		</li>
	);
};

export default MoviesListItem;
