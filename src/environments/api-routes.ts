const API_MAIN_ROUTE = 'https://restcountries.com/v2';

export const API_REQUEST_FIELDS =
	'?fields=name,population,region,capital,flag,alpha3Code';
export const API_REQUEST_FIELDS_DETAIL =
	',languages,currencies,topLevelDomain,subregion,nativeName,borders';
export const API_ROUTES = {
	all: `${API_MAIN_ROUTE}/all${API_REQUEST_FIELDS}`,
	byRegion: `${API_MAIN_ROUTE}/region`,
	byName: `${API_MAIN_ROUTE}/name`,
	byCode: `${API_MAIN_ROUTE}/alpha`
};
