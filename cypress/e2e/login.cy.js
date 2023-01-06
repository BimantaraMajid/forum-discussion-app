describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    // cy.visit('https://forum-discussion-app.vercel.app/');
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

    cy.get('input[type="search"]').type('Pencarian diskusi');
    cy.get('.sidebar').contains('Home').click();
    cy.get('.sidebar').contains('Leaderboards').click();
    cy.get('.sidebar').contains('Profile').click();
    cy.get('.sidebar').contains('New Thread').click();
    cy.get('.sidebar').contains('New Thread').click();

    cy.get('input[placeholder="Title"]').type('qwer1234');
    cy.get('input[placeholder="Category"]').type('qwer1234');
    cy.get('textarea').type('qwer1234');
    cy.get('button').contains(/^Save$/).click();

    cy.get('.dropdown').click().then(() => {
      cy.get('.dropdown').contains('Logout').click();
    });
  });
});
