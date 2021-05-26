import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry, ICountryDetail } from '../models/country.interfaces';
import { RegionsType } from '../data/regions';
import { API_REQUEST_FIELDS, API_ROUTES } from '../../environments/api-routes';

@Injectable({ providedIn: 'root' })
export class CountryService {
	constructor(private httpClient: HttpClient) {}

	getAll() {
		return this.httpClient.get<ICountry[]>(API_ROUTES.all);
	}

	getByRegion(region: RegionsType) {
		if (region == 'All') return this.getAll();

		return this.httpClient.get<ICountry[]>(
			`${API_ROUTES.byRegion}/${region}${API_REQUEST_FIELDS}`
		);
	}

	getBySearch(query: string) {
		if (!query || query === '') return this.getAll();
		return this.httpClient.get<ICountry[]>(
			`${API_ROUTES.byName}/${query}${API_REQUEST_FIELDS}`
		);
	}

	getByCode(code = 'co') {
		return this.httpClient.get<ICountry>(
			// `${API_ROUTES.byCode}/${code}${API_REQUEST_FIELDS}${API_REQUEST_FIELDS_DETAIL}`
			`${API_ROUTES.byCode}/${code}${API_REQUEST_FIELDS}`
		);
	}
}
