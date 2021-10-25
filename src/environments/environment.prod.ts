const API_MAIN_ROUTE = 'https://restcountries.com/v2';
const API_REQUEST_FIELDS =
	'?fields=name;population;region;capital;flag;alpha3Code';
export const environment = {
	production: true,
	API_ROUTES: {
		all: `${API_MAIN_ROUTE}/all${API_REQUEST_FIELDS}`,
		byRegion: `${API_MAIN_ROUTE}/region${API_REQUEST_FIELDS}`,
		byName: `${API_MAIN_ROUTE}/name${API_REQUEST_FIELDS}`,
		byCode: `${API_MAIN_ROUTE}/alpha${API_REQUEST_FIELDS}`,
		fields: '?fields=name;population;region;capital;flag;alpha3Code'
	}
};
