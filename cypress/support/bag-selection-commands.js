import {
	CONFIRMATION_BUTTON,
	NO_EXTRA_BAGS_RADIO_BUBTTON,
} from './constants/selectors/bag-selection-selectors';

Cypress.Commands.add('confirmBagSelection', () => {
	cy.clickOnElement(CONFIRMATION_BUTTON);
});

Cypress.Commands.add('selectIncludedBags', () => {
	cy.clickOnElement(NO_EXTRA_BAGS_RADIO_BUBTTON);
});

Cypress.Commands.add('confirmBagSelectionPage', () => {
	cy.url().should('include', Cypress.config().baseUrl + '/trip/flights/bags');
});
