import { IMovie } from '../models/IMovie';

export interface ISearchResult {
	Response: string;
	Search: IMovie[];
	totalResults: number;
}
