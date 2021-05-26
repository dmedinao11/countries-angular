import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

export const dropDownAnimation = trigger('expandHide', [
	state(
		'expand',
		style({
			height: '294px'
		})
	),
	state(
		'hide',
		style({
			height: '0px'
		})
	),
	transition('expand => hide', [animate('0.3s')]),
	transition('hide => expand', [animate('0.3s')])
]);
