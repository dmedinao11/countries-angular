import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

const routes: Routes = [
	{ path: 'countries', component: CountriesListComponent },
	{ path: 'country/:code', component: CountryDetailComponent },
	{ path: '', redirectTo: '/countries', pathMatch: 'full' },
	{ path: '**', component: Error404Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
