import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(
	'I want to book the first available one way flight from {string} to {string} on {string} for {int} adults and {int} child',
	(from, to, date, adults, childs) => {
		cy.visit('/');
		cy.setOneWayFlight();
		cy.setDeparture(from);
		cy.setDestination(to);
		cy.setDate(date);
		cy.setPassengers({ adults: adults }, { childs: childs });
		cy.startSearch();

		cy.confirmFlightSelectionPage();
		cy.selectFirstAvailableFlight();
		cy.selectValueFare();
		cy.fillAdultPassengersData(adults);
		cy.fillChildPassengersData(childs);
		cy.confirmPassengersData();

		cy.confirmSeatSelectionPage();
		cy.closeFamilySeatingDialog();
		cy.selectSeats(adults + childs);
		cy.confirmSeatSelection();

		cy.confirmBagSelectionPage();
		cy.selectIncludedBags();
		cy.confirmBagSelection();

		cy.confirmExtrasSelectionPage();
		cy.confirmExtrasSelection();

		cy.confirmFlightCompletedPage();
		cy.openCart();
		cy.confirmFlightIsAdded(from, to);
		cy.startCheckoutProcess();
	},
);

When('I enter the payment details using a non valid card', () => {
	cy.confirmPaymentPage();

	cy.enterPhoneNumber();
	cy.selectNoInsurance();
	cy.enterCardNumber(1234567890123456);
	cy.enterCardMonth();
	cy.enterCardYear();
	cy.enterCardHolderName();
	cy.enterAddress();
	cy.enterCity();
	cy.acceptTC();
	cy.confirmPayment();
});

Then('I should get {string} error message', (error) => {
	cy.errorShouldExist(error);
});
