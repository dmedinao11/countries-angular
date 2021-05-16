import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICountry, ICountryDetail } from '../models/country.interfaces';

@Injectable({ providedIn: 'root' })
export class CountryService {
	constructor(private httpClient: HttpClient) {}

	getAll() {
		return this.httpClient.get<ICountry[]>(environment.API_ROUTES.all);
	}

	getByCode(code = 'co') {
		return this.httpClient.get<ICountry>(
			// `${environment.API_ROUTES.byCode}/${code}${environment.API_REQUEST_FIELDS}${environment.API_REQUEST_FIELDS_DETAIL}`
			`${environment.API_ROUTES.byCode}/${code}${environment.API_REQUEST_FIELDS}`
		);
	}
}
