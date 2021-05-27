import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
	IBorder,
	ICountry,
	ICountryDetail
} from '../models/country.interfaces';
import { RegionsType } from '../data/regions';
import {
	API_REQUEST_FIELDS,
	API_REQUEST_FIELDS_DETAIL,
	API_ROUTES
} from '../../environments/api-routes';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

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
		return this.httpClient
			.get<ICountry[]>(`${API_ROUTES.byName}/${query}${API_REQUEST_FIELDS}`)
			.pipe(catchError(() => of([])));
	}

	getByCode(code: string) {
		//TODO: Manejar error de no encontrado
		return this.httpClient
			.get<ICountryDetail>(
				`${API_ROUTES.byCode}/${code}${API_REQUEST_FIELDS}${API_REQUEST_FIELDS_DETAIL}`
			)
			.pipe(
				map(async (resp) => {
					resp.bordersDetail = await this.defineCountriesBorderDetails(resp.borders);
					return resp;
				})
			);
	}

	private defineCountriesBorderDetails(borders: string[]): Promise<IBorder[]> {
		const bordersQueryPromises = borders.map((borderCode) =>
			this.getNameByCode(borderCode)
		);
		return Promise.all(bordersQueryPromises);
	}

	private getNameByCode(code: string): Promise<IBorder> {
		return this.httpClient
			.get<IBorder>(`${API_ROUTES.byCode}/${code}?fields=name;alpha3Code`)
			.toPromise();
	}
}
