import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	hasDarkTheme: boolean;
	themeChangeEmmiter: EventEmitter<null>;
	private localstorageKey = 'useDarkTheme';

	constructor() {
		this.hasDarkTheme = localStorage.getItem(this.localstorageKey) == 'true';
		this.themeChangeEmmiter = new EventEmitter();
	}

	toggleTheme() {
		this.hasDarkTheme = !this.hasDarkTheme;
		localStorage.setItem(this.localstorageKey, JSON.stringify(this.hasDarkTheme));
		this.themeChangeEmmiter.emit();
	}
}
