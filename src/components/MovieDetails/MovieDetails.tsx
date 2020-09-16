import React from 'react';
import { IMovieDetails } from '../../models/IMovieDetails';
import { default as bemCssModules } from 'bem-css-modules';

import { default as MovieDetailsModuleCss } from './MovieDetails.module.css';

interface MovieDetailsProps {
	movieDetails: IMovieDetails;
}

const block = bemCssModules(MovieDetailsModuleCss);

const MovieDetails = ({ movieDetails }: MovieDetailsProps) => {
	const noPosterModifier = movieDetails.Poster === 'N/A';

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
				src={movieDetails.Poster}
				alt="poster image"
			/>
		);
	}

	return (
		<div className={block()}>
			<div className={block('section')}>
				<div className={block('poster')}>
					{posterImage}
				</div>
				<div className={block('info')}>
					<h1 className={block('title')}>
						{movieDetails.Title} ({movieDetails.Year})
					</h1>
					<p className={block('plot')}>
						{movieDetails.Plot}
					</p>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Director:</span>
						<span className={block('text')}>{movieDetails.Director}</span>
					</div>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Actors:</span>
						<span className={block('text')}>{movieDetails.Actors}</span>
					</div>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Country:</span>
						<span className={block('text')}>{movieDetails.Country}</span>
					</div>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Writers:</span>
						<span className={block('text')}>{movieDetails.Writer}</span>
					</div>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Genre:</span>
						<span className={block('text')}>{movieDetails.Genre}</span>
					</div>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Production:</span>
						<span className={block('text')}>{movieDetails.Production}</span>
					</div>
					<div className={block('descr')}>
						<span className={block('subtitle')}>Year:</span>
						<span className={block('text')}>{movieDetails.DVD}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
