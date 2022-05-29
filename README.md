# Loan App

A app to create and list loans. You can see loan installments info like value, due date and status. You can also mark a installment as paid.

## Running the app

Install dependencies: `npm install`

To run the app, just enter the command: `npm start`

## Tech

The app doesn't communicate with a server, so all its state is handled locally through the `localStorage` API.

### Stack

Built with React using Typescript.

Highlights:

- Uses `react-router-dom` to produce app navigation between pages;
- Uses `zustand` for app state management;

### Tests

Tests were written with `jest` and `react-testing-library`

To run tests: `npm test`
