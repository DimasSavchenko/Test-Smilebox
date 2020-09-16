import { MoviesSearchStore } from './MoviesSearchStore';
import { MovieDetailsStore } from './MovieDetailsStore';

export class RootStore {
	moviesSearchStore: MoviesSearchStore;
	movieDetailsStore: MovieDetailsStore;

	constructor() {
		this.moviesSearchStore = new MoviesSearchStore(this);
		this.movieDetailsStore = new MovieDetailsStore(this);
	}
}
