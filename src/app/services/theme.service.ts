import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	hasDarkTheme: boolean;
	themeChangeEmmiter: EventEmitter<null>;

	constructor() {
		this.hasDarkTheme = true;
		this.themeChangeEmmiter = new EventEmitter();
	}

	toggleTheme() {
		this.hasDarkTheme = !this.hasDarkTheme;
		this.themeChangeEmmiter.emit();
	}
}
