// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_MAIN_ROUTE = 'https://restcountries.eu/rest/v2';
const API_REQUEST_FIELDS =
	'?fields=name;population;region;capital;flag;alpha3Code';

export const environment = {
	production: false,
	API_MAIN_ROUTE: 'https://restcountries.eu/rest/v2',
	API_REQUEST_FIELDS: '?fields=name;population;region;capital;flag;alpha3Code',
	API_REQUEST_FIELDS_DETAIL:
		';languages;currencies;topLevelDomain;subregion;nativeName;borders',
	API_ROUTES: {
		all: `${API_MAIN_ROUTE}/all${API_REQUEST_FIELDS}`,
		byRegion: `${API_MAIN_ROUTE}/region${API_REQUEST_FIELDS}`,
		byName: `${API_MAIN_ROUTE}/name${API_REQUEST_FIELDS}`,
		byCode: `${API_MAIN_ROUTE}/alpha`,
		fields: '?fields=name;population;region;capital;flag;alpha3Code'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
