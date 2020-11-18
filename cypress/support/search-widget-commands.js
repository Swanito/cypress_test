import '@testing-library/cypress/add-commands';
import {
	ONE_WAY_BUTTON,
	DEPARTURE_INPUT,
	DESTINATIN_INPUT,
	DATE_INPUT,
	PASSENGERS_INPUT,
	AIRPORT_DEPARTURE_SEARCH_RESULTS,
	AIRPORT_DESTINATION_SEARCH_RESULTS,
	ADD_ADULT_PASSENGER_BUTTON,
	ADD_CHILD_PASSENGER_BUTTON,
	ADULT_PASSENGER_COUNTER,
	CHILD_PASSENGER_COUNTER,
	PASSENGER_DONE_BUTTON,
	START_SEARCH_BUTTON,
} from './constants/selectors/search-widget.selectors';

Cypress.Commands.add('setOneWayFlight', () => {
	cy.clickOnElement(ONE_WAY_BUTTON);
});

Cypress.Commands.add('setDeparture', (from) => {
	cy.clickOnElement(DEPARTURE_INPUT);
	cy.get(DEPARTURE_INPUT).clear().type(from);
	cy.get(AIRPORT_DEPARTURE_SEARCH_RESULTS).should('have.length', 1);
	cy.clickOnElement(AIRPORT_DEPARTURE_SEARCH_RESULTS);
});

Cypress.Commands.add('setDestination', (to) => {
	cy.clickOnElement(DESTINATIN_INPUT);
	cy.get(DESTINATIN_INPUT).clear().type(to);
	cy.get(AIRPORT_DESTINATION_SEARCH_RESULTS).should('have.length', 1);
	cy.clickOnElement(AIRPORT_DESTINATION_SEARCH_RESULTS);
});

Cypress.Commands.add('setDate', (date) => {
	cy.clickOnElement(DATE_INPUT);

	cy.wait('@availabilities').should((xhr) => {
		const availableDates = xhr.response.body;
		cy.get(`[data-id="${availableDates[0]}"]`).click();
	});
});

Cypress.Commands.add('setPassengers', ({ adults }, { childs }) => {
	cy.clickOnElement(PASSENGERS_INPUT);
	for (let i = 0; i < adults; i++) {
		cy.clickOnElement(ADD_ADULT_PASSENGER_BUTTON);
	}
	for (let i = 0; i < childs; i++) {
		cy.clickOnElement(ADD_CHILD_PASSENGER_BUTTON);
	}

	cy.get(ADULT_PASSENGER_COUNTER).should(($field) => {
		expect($field).to.contain(adults);
	});

	cy.get(CHILD_PASSENGER_COUNTER).should(($field) => {
		expect($field).to.contain(childs);
	});

	cy.clickOnElement(PASSENGER_DONE_BUTTON);
});

Cypress.Commands.add('startSearch', () => {
	cy.clickOnElement(START_SEARCH_BUTTON);
});
