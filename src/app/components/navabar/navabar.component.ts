import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
	selector: 'app-navabar',
	templateUrl: './navabar.component.html',
	styleUrls: ['./navabar.component.scss']
})
export class NavabarComponent implements OnInit {
	constructor(private themeService: ThemeService) {}

	ngOnInit(): void {}

	handleModeToggle() {
		this.themeService.toggleTheme();
	}
}
