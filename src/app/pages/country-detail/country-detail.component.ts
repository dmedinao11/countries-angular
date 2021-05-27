import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ICountryDetail } from 'src/app/models/country.interfaces';
import { CountryService } from '../../../app/services/country.service';

@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.component.html',
	styleUrls: [
		'./country-detail.component.scss',
		'../../styles/loader.styles.scss'
	]
})
export class CountryDetailComponent implements OnInit {
	private routeSubscription: Subscription;
	country: ICountryDetail;
	hasData = true;

	constructor(
		private route: ActivatedRoute,
		private countryService: CountryService,
		public location: Location
	) {}

	ngOnInit(): void {
		this.routeSubscription = this.route.paramMap.subscribe((params) => {
			this.countryService
				.getByCode(params.get('code') as string)
				.subscribe(async (resp) => {
					if (resp) this.country = await resp;
					else this.hasData = false;
				});
		});
	}

	ngOnDestroy() {
		this.routeSubscription.unsubscribe();
	}
}
