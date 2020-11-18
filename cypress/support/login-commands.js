import '@testing-library/cypress/add-commands';
import { LOGIN } from './constants/strings/login-strings';

Cypress.Commands.add('login', (email, password) => {
	cy.clickOnLabel(LOGIN);
	cy.typeIn(
		'ry-auth-email.form__input > .ng-untouched > ._input-container > .b2',
		email,
	);
	cy.typeIn(
		'#ry-modal-portal > div > ry-auth-popup-container > div > ry-auth-popup > div > ry-login > form > ry-auth-password > ry-input-d > div > input',
		password,
	);
	cy.clickOnElement(
		'#ry-modal-portal > div > ry-auth-popup-container > div > ry-auth-popup > div > ry-login > form > ry-auth-submit > button',
	);
});

Cypress.Commands.add('shouldBeLoggedIn', (username) => {
	cy.get('.ry-header__user-name').findAllByText(username);
});
