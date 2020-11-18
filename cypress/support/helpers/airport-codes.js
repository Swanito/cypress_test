export const airportTranslationHelper = (airportCode) => {
	let airport;
	switch (airportCode) {
		case 'MAD':
			airport = {
				city: 'Madrid',
			};
			break;
		case 'AUS':
			airport = {
				city: 'Vienna',
			};
			break;
		default:
			airport = {
				city: 'Unknown',
			};
			break;
	}
	return airport;
};
