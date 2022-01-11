/// <reference types="cypress" />
import ObjectPage from "./PageObject/ObjectPage";
describe('Cy.intercept tests', () => {
    const signup = new ObjectPage ();
    const data = Cypress.env();
    beforeEach(function() {
        signup.navigateSignup();        
      });
    it('The user should register by entering any nonsense in the required fields',() => {
      cy.intercept('POST','http://localhost:3001/users',{
        fixtures: "userSignup.json",
      });
      signup.firstName()
      .type('nonsense');
      signup.lastName()
      .type('more nosense');
      signup.Username()
      .type('even more nonsense');
      signup.Password()
      .type('rave');
      signup.confirmPassword()
      .type('rave');
      cy.clickButton();
      signup.Header()
      .should('contain', 'Sign in')
    }); 
    it('The user should logged in by entering any nonsense in the required fields',() => {
      cy.clickLink();
      cy.intercept('POST','http://localhost:3001/login',{
        fixtures: "userSignin.json",
      });
      signup.Username()
      .type('Test even more nonsense Test');
      signup.Password()
      .type('Test rave Test');
      cy.clickButton();
      signup.elementHome()
      .should('contain','Home');
    }); 
    it('Registranion with using `cy.request`', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3001/users',
        body: {
          "confirmPassword": "22041977",
          "firstName": "Evgen",
          "lastName": "Toporovsky",
          "password": "22041977",
          "username": "Evgen77"
        }
      }).then((response) => {
        expect(response.status)
        .to.eq(201);
        expect(response)
        .has.property('body');
        expect(response)
        .has.property('headers');
        expect(response.body)
        .has.property('user')
        expect(response.body.user)
        .has.property('username','Evgen77');
        expect(response.body.user)
        .has.property('balance',0)
      });
    it('Logged in with using `cy.request`', () => {
      cy.clickLink();
      cy.request({
        method: 'POST',
        url: 'http://localhost:3001/login',
        body: {
          "type": "LOGIN", 
          "username": "Evgen77", 
          "password": "22041977"
          }
        }).then((response) => {
          expect(response.status)
          .to.eq(200);
          expect(response)
          .has.property('body');
          expect(response)
          .has.property('headers');
          expect(response.body)
          .has.property('user');
          expect(response.body.user)
          .has.property('username','Evgen77');
          expect(response.body.user)
          .has.property('balance',0);
        })
      
      })
    })  
     
})