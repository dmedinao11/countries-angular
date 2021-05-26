import { Component, OnInit } from '@angular/core';
import { RegionsType } from 'src/app/data/regions';
import { ICountry } from 'src/app/models/country.interfaces';
import { CountryService } from 'src/app/services/country.service';

@Component({
	selector: 'app-countries-list',
	templateUrl: './countries-list.component.html',
	styleUrls: [
		'./countries-list.component.scss',
		'../../styles/inputs.styles.scss',
		'../../styles/loader.styles.scss'
	]
})
export class CountriesListComponent implements OnInit {
	countriesToShow: ICountry[] = [];
	regionSelected: RegionsType | undefined;
	isLoaded = false;
	hasData = true;
	searchBar = '';

	constructor(private countryService: CountryService) {}

	ngOnInit(): void {
		this.countryService.getAll().subscribe((resp) => {
			this.countriesToShow = resp;
			this.isLoaded = true;
		});
	}

	handleRegionChange() {
		this.isLoaded = false;
		this.countryService
			.getByRegion(this.regionSelected || 'All')
			.subscribe((resp) => {
				this.countriesToShow = resp;
				this.isLoaded = true;
			});
	}

	handleSearchbarChange() {
		this.isLoaded = false;
		this.countryService.getBySearch(this.searchBar).subscribe((resp) => {
			if (resp.length === 0) this.hasData = false;
			else {
				this.countriesToShow = resp;
				this.isLoaded = true;
				this.hasData = true;
			}
		});
	}
}
