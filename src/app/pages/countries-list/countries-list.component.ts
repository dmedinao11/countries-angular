import { Component, OnInit } from '@angular/core';
import { ICountry } from 'src/app/models/country.interfaces';
import { CountryService } from 'src/app/services/country.service';

//TODO: Usar el virtual scroll
@Component({
	selector: 'app-countries-list',
	templateUrl: './countries-list.component.html',
	styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
	allCountries: ICountry[] = [];

	constructor(private countryService: CountryService) {}

	ngOnInit(): void {
		this.countryService.getAll().subscribe((resp) => (this.allCountries = resp));
	}
}
