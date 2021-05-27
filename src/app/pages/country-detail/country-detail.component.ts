import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICountryDetail } from 'src/app/models/country.interfaces';
import { CountryService } from '../../../app/services/country.service';

@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.component.html',
	styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
	private routeSubscription: Subscription;
	country: ICountryDetail;

	constructor(
		private route: ActivatedRoute,
		private countryService: CountryService
	) {}

	//TODO: Funcionalidad del botón retroceder

	ngOnInit(): void {
		this.routeSubscription = this.route.paramMap.subscribe((params) => {
			this.countryService
				.getByCode(params.get('code') as string)
				.subscribe(async (resp) => {
					this.country = await resp;
					console.log(resp);
				});
		});
	}

	ngOnDestroy() {
		this.routeSubscription.unsubscribe();
	}
}
