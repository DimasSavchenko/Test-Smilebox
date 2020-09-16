import { action, observable, runInAction } from 'mobx';

import { BaseStore } from './BaseStore';
import { IAjaxResponse } from '../models/IAjaxResponse';
import { ISearchResult } from '../dtos/ISearchResult';
import { IMovie } from '../models/IMovie';
import { BASE_URL, API_KEY } from '../constants/apiData';

export class MoviesSearchStore extends BaseStore {
	@observable
	moviesList: IMovie[] = [];

	@observable
	searchQuery = '';

	@action
	setSearchQuery = (query: string): void => {
		this.searchQuery = query;
	};

	@action
	resetSearchQuery = (): void => {
		this.moviesList = [];
	};

	@action
	loadMoviesSearchList = async (
		query: string,
	): Promise<IAjaxResponse<ISearchResult> | null> => {
		this.networkError = undefined;
		const url = `${BASE_URL}?s=${query}&apikey=${API_KEY}`;
		const response = await this.getUrl<ISearchResult>(url);

		if (!response) {
			return null;
		}

		if (response.error) {
			runInAction((): void => {
				this.networkError = response.error;
			});
		}

		if (response.data) {
			const { Search, Response } = response.data;
			runInAction((): void => {
				if (Response === 'True') {
					this.moviesList = Search;
				}
			});
		}

		return response;
	};
}
