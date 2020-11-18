import { CONFIRM_BUTTON } from './constants/selectors/extras.selectors';

Cypress.Commands.add('confirmExtrasSelection', () => {
	cy.clickOnElement(CONFIRM_BUTTON);
});

Cypress.Commands.add('confirmExtrasSelectionPage', () => {
	cy.url().should('include', Cypress.config().baseUrl + '/trip/flights/extra');
});
