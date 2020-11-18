import faker from 'faker';
import {
	YEAR_DROPODOWN_OPTION,
	YEAR_DROPDOWN,
	TC_CHECKBOX,
	PHONE_NUMBER_INPUT,
	NO_INSURANCE_RADIO,
	MONTH_DROPDOWN_OPTIOON,
	MONTH_DROPDOWN,
	FORM_FIELDS,
	FORM_ERRORS,
	CONFIRM_BUTTON,
	CITY_INPUT,
	CARD_NUMBER_INPUT,
	CARD_HOLDER_INPUT,
	ADDRESS_INPUT,
} from './constants/selectors/payment.selector';

Cypress.Commands.add('confirmPaymentPage', () => {
	cy.url().should('include', Cypress.config().baseUrl + '/payment');
});

Cypress.Commands.add('errorShouldExist', (error) => {
	cy.get(FORM_FIELDS).get(FORM_ERRORS).should('have.text', error);
});

Cypress.Commands.add('enterCardNumber', (cardNumber) => {
	cy.typeIn(CARD_NUMBER_INPUT, cardNumber);
});

Cypress.Commands.add('enterCardMonth', () => {
	cy.clickOnElement(MONTH_DROPDOWN).clickOnElement(MONTH_DROPDOWN_OPTIOON);
});

Cypress.Commands.add('enterCardYear', () => {
	cy.clickOnElement(YEAR_DROPDOWN).clickOnElement(YEAR_DROPODOWN_OPTION);
});

Cypress.Commands.add('enterPhoneNumber', () => {
	cy.typeIn(PHONE_NUMBER_INPUT, 123456789);
});

Cypress.Commands.add('selectNoInsurance', () => {
	cy.clickOnElement(NO_INSURANCE_RADIO);
});

Cypress.Commands.add('enterCardHolderName', () => {
	const name = faker.name.firstName();
	cy.typeIn(CARD_HOLDER_INPUT, name);
});

Cypress.Commands.add('enterAddress', () => {
	const street = faker.address.streetAddress();
	cy.typeIn(ADDRESS_INPUT, street);
});

Cypress.Commands.add('enterCity', () => {
	const city = faker.address.city();
	cy.typeIn(CITY_INPUT, city);
});

Cypress.Commands.add('acceptTC', () => {
	cy.clickOnElement(TC_CHECKBOX);
});

Cypress.Commands.add('confirmPayment', () => {
	cy.clickOnElement(CONFIRM_BUTTON);
});
