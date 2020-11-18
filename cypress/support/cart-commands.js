import { airportTranslationHelper } from '../support/helpers/airport-codes';
import {
	CART_BUTTON,
	FLIGHT_ADDED_COLUMN,
	COLUMNS_WRAPPER,
	COLUMNS_TITLE,
	COLUMNS_SUTITLE,
	CHECKOUT_BUTTON,
	CART_TO_CONTAINER,
	CART_FROM_CONTAINER,
} from './constants/selectors/cart.selectors';

Cypress.Commands.add('confirmFlightCompletedPage', () => {
	cy.url().should('include', Cypress.config().baseUrl + '/trip');
	cy.get(COLUMNS_TITLE);
	cy.get(COLUMNS_SUTITLE);
	cy.get(COLUMNS_WRAPPER);
	cy.get(FLIGHT_ADDED_COLUMN);
});

Cypress.Commands.add('openCart', () => {
	cy.clickOnElement(CART_BUTTON);
});

Cypress.Commands.add('startCheckoutProcess', () => {
	cy.clickOnElement(CHECKOUT_BUTTON);
});

Cypress.Commands.add('confirmFlightIsAdded', (from, to) => {
	const fromLocation = airportTranslationHelper(from);
	const toLocation = airportTranslationHelper(to);
	cy.get(CART_FROM_CONTAINER).should('have.text', ` ${fromLocation.city} `);
	cy.get(CART_TO_CONTAINER).should('have.text', ` ${toLocation.city} `);
});
