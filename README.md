# What is this?

This is an end to end test over the Ryanair booking system. The test has been developed using [Cypress](https://www.cypress.io/), an javascript end to end testing framework for web applications. In order to define the test, cucumber has been used using the cypress-cucumber-preprocessor adapter.

# Why Cypress?

Cypress is a modern testing framework for modern web applications. It has some cool and fancy features like:

- Implicit waits: cypress waits and retries each command before it conotinues with the next or before failing the test.
- Easy to mock: network requests are very easy to mock and with cypress you can create end-to-end tests and isolated UI tests easily.
- Built-in screenshots and videos: after each test cypress will take screenshoots on failure and record a video on each test.
- Easy to set-up and configure.

# Page object?

Cypress is not a friend of page object pattern. Instead, we can implement customo command to cypress in order to perform actions over the page. There are some command defined in the folder [cypress > support](./cypress/support). Each page or page-chunk has been splited in a file with all the command that relates to it.

# Steps to execute the tests

### Visual way:

1. Navigate to the project root and execute npm install
2. Execute npx cypress open in the project root
3. Select the desired feature file
4. The browser will be opened and the tests will run
5. After the execution run the command node ./cypress/report/index.js if you want to generate the report.

### Headless way:

1. Navigate to the project root and execute npm install
2. Execute npn run test in the project root. This script will run the test in headless mode and will ooutput the html report.

# Where do I see the test results?

After each test execution a video will be recorded and published in [cypress > videos](./cypress/videos) folder with the name of the feature.

An html report will be published in [cypress > report](./cypress/report).
