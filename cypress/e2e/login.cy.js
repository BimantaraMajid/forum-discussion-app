import React from 'react';
import { IoHome } from 'react-icons/io5';

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when email is not valid', () => {
    cy.get('input[placeholder="Email"]').type('majid');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('majid@gmail.com');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('majid@gmail.com');
    cy.get('input[placeholder="Password"]').type('majid@gmail.com');

    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('majid@gmail.com');
    cy.get('input[placeholder="Password"]').type('qwer1234');

    cy.get('button').contains(/^Login$/).click();

    cy.get('nav > a').should('have.length', 2).should('have.attr', 'href');
    cy.get('.navigation > a').should('have.length', 1).should('have.attr', 'href');
    cy.get('.navigation > button').should('have.length', 1);
    // cy.get('nav > a').should('have.attr', 'href')
    // cy.get('button').contains(<IoHome />).should('be.visible');
  });
});
