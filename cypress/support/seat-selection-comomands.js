import {
	FAMILY_SEATING_DIALOG_BUTTON,
	SEATS,
	BUTTON,
	CONFIRM_BUTTON,
	UNAVAILABLE_SEATS,
	EXTRALEG_SEATS,
} from './constants/selectors/seat-selection.selectors';

Cypress.Commands.add('confirmSeatSelectionPage', () => {
	cy.url().should('include', Cypress.config().baseUrl + '/trip/flights/seats');
});

Cypress.Commands.add('closeFamilySeatingDialog', () => {
	cy.clickOnElement(FAMILY_SEATING_DIALOG_BUTTON);
});

Cypress.Commands.add('selectSeats', (numberOfSeats) => {
	cy.get(SEATS)
		.get(BUTTON)
		.not(UNAVAILABLE_SEATS)
		.not(EXTRALEG_SEATS)
		.each((element, i) => {
			if (i <= numberOfSeats) {
				element.click();
			}
		});
});

Cypress.Commands.add('confirmSeatSelection', () => {
	cy.clickOnElement(CONFIRM_BUTTON);
});
