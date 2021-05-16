import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Directive({
	selector: '[appTheme]'
})
export class ThemeDirective implements OnDestroy {
	private emmiterSubscription: Subscription;

	constructor(
		private themeService: ThemeService,
		private el: ElementRef<HTMLElement>
	) {
		if (themeService.hasDarkTheme) el.nativeElement.classList.add('dark');

		this.emmiterSubscription = themeService.themeChangeEmmiter.subscribe(() =>
			el.nativeElement.classList.toggle('dark')
		);
	}

	ngOnDestroy(): void {
		this.emmiterSubscription.unsubscribe();
	}
}
