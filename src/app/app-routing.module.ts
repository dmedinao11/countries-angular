import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

const routes: Routes = [
	{ path: 'countries', component: CountriesListComponent },
	{ path: 'country', component: CountryDetailComponent },
	{ path: '', redirectTo: '/countries', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
