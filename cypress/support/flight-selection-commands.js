import faker from 'faker';
import { CONFIRM_BUTTON } from './constants/selectors/flight-selection.selectors';

const flightCard = '.card-header';
const valueFare = '.fare-card__button-text';

Cypress.Commands.add('confirmFlightSelectionPage', () => {
	cy.url().should('include', Cypress.config().baseUrl + '/trip/flights/select');
});

Cypress.Commands.add('selectFirstAvailableFlight', () => {
	cy.wait('@tripOverview').then((_) => {
		cy.clickOnElement(flightCard);
	});
});

Cypress.Commands.add('selectValueFare', () => {
	cy.clickOnElement(valueFare);
});

Cypress.Commands.add('fillAdultPassengersData', (numberOfAdults) => {
	for (let i = 1; i <= numberOfAdults; i++) {
		cy.get(
			`:nth-child(${i}) > pax-passenger > .passenger > pax-passenger-details-container > pax-passenger-details > .details-form-container > pax-details-form > #title-0-error-message > .dropdown > .dropdown__toggle`,
		)
			.click()
			.get('[data-ref="title-item-0"] > .dropdown-item__link')
			.click();
		cy.typeIn(
			`[name="formState.passengers.ADT-${i - 1}.name"]`,
			faker.name.firstName(),
		);
		cy.typeIn(
			`[name="formState.passengers.ADT-${i - 1}.surname"]`,
			faker.name.lastName(),
		);
	}
});

Cypress.Commands.add('fillChildPassengersData', (numberOfChilds) => {
	for (let i = 1; i <= numberOfChilds; i++) {
		cy.typeIn(
			`[name="formState.passengers.CHD-${i - 1}.name"]`,
			faker.name.firstName(),
		);
		cy.typeIn(
			`[name="formState.passengers.CHD-${i - 1}.surname"]`,
			faker.name.lastName(),
		);
	}
});

Cypress.Commands.add('confirmPassengersData', () => {
	cy.clickOnElement(CONFIRM_BUTTON);
});
