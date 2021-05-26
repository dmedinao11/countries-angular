import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { ThemeDirective } from './directives/theme.directive';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CoutryCardComponent } from './components/coutry-card/coutry-card.component';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { RegionSelectorComponent } from './components/region-selector/region-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		NavabarComponent,
		ThemeDirective,
		CountriesListComponent,
		CountryDetailComponent,
		CoutryCardComponent,
		RegionSelectorComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		VirtualScrollerModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
