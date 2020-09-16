import { action, observable, runInAction } from 'mobx';

import { BaseStore } from './BaseStore';
import { IAjaxResponse } from '../models/IAjaxResponse';
import { IMovieDetails } from '../models/IMovieDetails';
import { BASE_URL, API_KEY } from '../constants/apiData';

export class MovieDetailsStore extends BaseStore {
	@observable
	movieDetails = {} as IMovieDetails;

	@action
	loadMovieDetails = async (
		imdbID: string,
	): Promise<IAjaxResponse<IMovieDetails> | null> => {
		this.networkError = undefined;
		const url = `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`;
		const response = await this.getUrl<IMovieDetails>(url);

		if (!response) {
			return null;
		}

		if (response.error) {
			runInAction((): void => {
				this.networkError = response.error;
			});
		}

		if (response.data) {
			runInAction((): void => {
				const movieDetails = response.data as IMovieDetails;
				if (movieDetails.Response === 'True') {
					this.movieDetails = response.data as IMovieDetails;
				}
			});
		}

		return response;
	}
}
