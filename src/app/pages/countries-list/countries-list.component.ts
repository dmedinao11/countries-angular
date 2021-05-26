import { Component, OnInit } from '@angular/core';
import { RegionsType } from 'src/app/data/regions';
import { ICountry } from 'src/app/models/country.interfaces';
import { CountryService } from 'src/app/services/country.service';

@Component({
	selector: 'app-countries-list',
	templateUrl: './countries-list.component.html',
	styleUrls: [
		'./countries-list.component.scss',
		'../../styles/inputs.styles.scss'
	]
})
export class CountriesListComponent implements OnInit {
	allCountries: ICountry[] = [];

	regionSelected: RegionsType | undefined;

	constructor(private countryService: CountryService) {}

	ngOnInit(): void {
		this.countryService.getAll().subscribe((resp) => (this.allCountries = resp));
	}

	handleChange() {
		console.log(this.regionSelected);
	}
}
