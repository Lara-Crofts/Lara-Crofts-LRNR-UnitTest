//CYPRESS DOCUMENTATION: https://docs.cypress.io/guides/getting-started/installing-cypress

// go to root directory and run the following command:
// npm install cypress
// or: npm install cypress --save-dev


// go to package.json file and add the following script

// "scripts": {
//     "cy:run": "cypress run",
//     "test": "npm run cypress:run",
//     "cy:open": "cypress open"
//   },



// npm run cy:open
// (open cypress and run the test)

// npm run cy:open

// on vs code a cypress.config  folder will be created
// go to chrome on cypress and click on valentine.cy.js
// (run the test)

// import { describe, it } from 'cypress';

// *****on the cypress.config.js file.. can add the localhost url so that later in this file we can use the url to visit the page




describe('Quiz Form', () => {

    // Test case 1 *******************************************
    it('user should be able to go to new quiz & that more than 4 questions are displaying for generated quiz', () => {
      cy.visit('http://localhost:3000/quiz');

      cy.get('#btn-categories').click();
  
      // questions are displayed after form submission
      cy.get('.container').should('be.visible');
      cy.get('.form-select').should('have.length', 4); 
  
      cy.url().should('include', '/quiz');
    });
  });


  
// test 2 if toggle bar is visible in different togger view point sizes *******************************************
describe('Navbar Links Visibility', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Visit your application
    });
  
    it('should display children links in navbar at different viewport sizes', () => {
      cy.viewport('ipad-2');
      cy.get('.navbar-toggler').should('be.visible'); // navbar toggler is visible
      cy.get('.navbar-collapse').should('not.be.visible'); 
  
      // Click the navbar toggler to expand the collapsed navbar
      cy.get('.navbar-toggler').click();
      cy.get('.navbar-collapse').should('be.visible'); 
  
      // Assert that children links are visible
      cy.get('.navbar-collapse').within(() => {
        cy.get('.nav-link').should('be.visible'); 
      });
  
      // Test for large viewport
      cy.viewport('macbook-15');
      cy.get('.navbar-collapse').should('be.visible'); 
  
      cy.get('.navbar-collapse').within(() => {
        cy.get('.nav-link').should('be.visible'); // children links should be visible
      });
    });
  });



    // test 3 if after choosing option in quiz generator page, it routes to new generrated quiz page  *******************************************

    describe('Quiz Form Navigation', () => {
        it('should navigate to quiz page after submitting the quiz form', () => {
          cy.visit('http://localhost:3000/quiz');
      
          // Submit the quiz form
          cy.get('#btn-categories').click();
      
          // Assert that the URL includes '/quiz', indicating navigation to the quiz page
          // should direct to endpoint: http://localhost:4000/api/generateQuiz?topic=&expertise=&questionNum=5&questionStyle=normal
          cy.url().should('include', '/quiz');
        });
      });




// test 4 if should display streak, platinum quizzes, and learner level information in /account page 
// for its specific div  *******************************************

describe('Account Page Content', () => {
    it('should display streak, platinum quizzes, and learner level information', () => {
      // Visit the Account page
      cy.visit('http://localhost:3000/account');

    cy.contains('.new-column-heading', 'Stats').should('be.visible');

  
      cy.contains('.icon-block', 'Streak').should('be.visible');
      cy.contains('.light', 'You have a streak of 5 days!').should('be.visible');
  
      cy.contains('.icon-block', 'Platinum Quizzes').should('be.visible');
      cy.contains('.light', 'golang - intermediate').should('be.visible');
      cy.contains('.light', 'Javascript - beginner').should('be.visible');
      cy.contains('.light', 'AWS - beginner').should('be.visible');
  
      cy.contains('.header-5', 'lrnr Level: 2').should('be.visible');
      cy.contains('.light', '150/200 xp').should('be.visible');
    });
  });
  