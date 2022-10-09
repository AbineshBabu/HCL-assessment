# HCL-assessment

A Cypress Automation Test Framework with cucumber to validate the public API endpoints consisting of GET, PUT, POST and DELETE methods.

## Table of contents

* Getting started
  * Prerequisites
  * Installation
  * Folder Structure
  
* How to run the tests
  * Test execution
  
### Prerequisites

- [Node.js](https://nodejs.org/) v16.17.1 - should be installed in the machine.


### Installation

 1) Clone the repository using below steps,

 ```sh
 git clone https://github.com/AbineshBabu/HCL-assessment.git
 ```

 2) Install dependencies:

 ```sh
 npm install
 ```
 
### Folder Structure

- `fixtures` - To maintain the test/mock data.
- `integration` - To maintain all the test cases in Gherkin syntax and step definition.
- `plugins` - To maintain the events listeners. Logs the events.
- `support` - To maintain reusable scripts.
- `cypress.json` - Cypress configurations. Override default values

## How to run the tests

  ### Test execution
 - `npm run test` - To execute all the test cases developed in cucumber.