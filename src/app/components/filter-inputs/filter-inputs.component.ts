import { Component, OnInit } from '@angular/core';

import { Regions } from '../../data/regions';

@Component({
	selector: 'app-filter-inputs',
	templateUrl: './filter-inputs.component.html',
	styleUrls: ['./filter-inputs.component.scss']
})
export class FilterInputsComponent implements OnInit {
	REGIONS = Regions;

	constructor() {}

	ngOnInit(): void {}
}
