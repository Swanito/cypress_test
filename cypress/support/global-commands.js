import '@testing-library/cypress/add-commands';

Cypress.Commands.add('captureNetwork', () => {
	cy.server();
	cy.route('GET', '**/availabilities*').as('availabilities');
	cy.route('POST', '**/tripOverview*').as('tripOverview');
});

Cypress.Commands.add('clickOnLabel', (label) => {
	cy.findAllByText(label).click();
});

Cypress.Commands.add('clickOnElement', (selector) => {
	cy.get(selector).click();
});

Cypress.Commands.add('typeIn', (inputSelector, string) => {
	cy.get(inputSelector).type(string);
});
