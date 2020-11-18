import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const username = Cypress.env('VALID_USERNAME');
const password = Cypress.env('VALID_PASSWORD');

Given('I enter my credentials', () => {
	cy.captureNetwork();
	cy.visit('/');
	cy.login(username, password);
});

Then("I'm logged in", () => {
	cy.shouldBeLoggedIn(username);
});
