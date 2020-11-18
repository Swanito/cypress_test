Feature: Book Flights

    This feature file contains the tests scenarios for the booking system

    Background: User login
        When I enter my credentials
        Then I'm logged in

    Scenario: Book a Flight - Error message when entering an non valid card number
        Given I want to book the first available one way flight from 'MAD' to 'AUS' on '12-13-2020' for 2 adults and 1 child
        When I enter the payment details using a non valid card
        Then I should get 'Please enter a valid card number' error message