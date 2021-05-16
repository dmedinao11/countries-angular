import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/models/country.interfaces';

@Component({
	selector: 'app-coutry-card',
	templateUrl: './coutry-card.component.html',
	styleUrls: ['./coutry-card.component.scss']
})
export class CoutryCardComponent implements OnInit {
	@Input() country: ICountry | undefined;

	constructor() {}

	ngOnInit(): void {}
}
