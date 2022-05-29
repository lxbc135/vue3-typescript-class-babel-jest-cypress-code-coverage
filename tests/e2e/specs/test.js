/// <reference types="cypress" />

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
  });

  it('should visit About page', () => {
    cy.visit('/about');
    cy.contains('h1', 'This is an about page');
  });
});
