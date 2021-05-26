import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RegionsType, Regions } from '../../data/regions';

import { dropDownAnimation } from './regions-selector.animations';
@Component({
	selector: 'app-region-selector',
	templateUrl: './region-selector.component.html',
	styleUrls: ['../../styles/inputs.styles.scss'],
	animations: [dropDownAnimation],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegionSelectorComponent),
			multi: true
		}
	]
})
export class RegionSelectorComponent implements ControlValueAccessor {
	value: RegionsType | undefined;
	REGIONS = Regions;
	isDropped = false;

	onChange: any = () => {};
	onTouch: any = () => {};

	constructor() {}

	writeValue(value: RegionsType): void {
		this.value = value;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	handleToggleDrop() {
		this.isDropped = !this.isDropped;
	}

	handleOptionClick(selected: RegionsType) {
		this.value = selected;
		this.onChange(selected);
		this.onTouch();
	}
}
