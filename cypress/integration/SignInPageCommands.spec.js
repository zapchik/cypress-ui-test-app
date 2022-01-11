/// <reference types="cypress" />

import ObjectPage from "./PageObject/ObjectPage";
describe('Signin page tests', () => {
    const signin = new ObjectPage ();
    const data = Cypress.env();
    const Element = Cypress.env()

    beforeEach(function() {
        signin.navigateSignin();
        
      });
    it('The `Sign In` page should contain logos,titles,links', () => {
        signin.Logo1()
        .should('be.visible');
        signin.Logo2()
        .should('be.visible');
        signin.Logo1Logo2Color()
        .should('have.css', 'color', data.color6);
        signin.Header()
        .should('be.visible')
        .should('contain', data.header1)
        .should('have.css', 'color', data.color3);
        signin.RememberMeTitle()
        .should('be.visible')
        .should('contain', data.header2)
        .should('have.css', 'color', data.color3);
        signin.DontHaveAnAccountLink()
        .should('be.visible')
        .should('have.css','color',data.color4)
        .should('have.attr','href','/signup')
        .should('contain', data.link1);
        signin.BuiltByTitle()
        .should('be.visible')
        .should('have.css', 'color', data.color5)
        .and('contain',data.header3);
        signin.checkCypressIoLink();
    });
    it('The `Sign in` page should contain required fields, checkboxes and buttons', () => {
        signin.allFields()
        .should('be.visible')
        .should('contain', data.placeholder1)
        .should('contain', data.placeholder2);
        signin.checkCheckbox();
    });
    it('check the messages and colors of the fields when entering invalid data', () => {
        signin.Password()
        .should('be.visible')
        .type(data.shortPassword);
        signin.Username()
        .should('be.visible')
        .type(data.blankUsername);
        signin.usernameFieldErrorColor()
        .should('be.visible')
        .should('contain', data.placeholder1)
        .should('have.css', 'color',data.color2);
        signin.passwordFieldErrorColor()
        .should('be.visible')
        .should('contain', data.placeholder2)
        .should('have.css', 'color',data.color2);
        signin.ErrorMessageAndColorUsername()
        .should('be.visible')
        .should('contain', data.error2)
        .should('have.css', 'color', data.color2);
        signin.ErrorMessageAndColorPassword()
        .should('be.visible')
        .should('contain', data.error3)
        .should('have.css', 'color', data.color2);
        signin.BorderColor()
        .should('have.css', 'border-color', data.color2);
    });
    it('The link on the `Sign in` page should redirect the user to the `Sign up` page', () => {
        cy.clickLink();
        signin.SignInUpHeader()
        .should('be.visible')
        .should('contain','Sign Up');
        cy.clickLink();
        signin.SignInUpHeader()
        .should('be.visible')
        .should('contain','Sign in');
    });
    it('Check error message', () => {
        signin.Username()
        .type(data.wrongUsername);
        signin.Password()
        .type(data.wrongPassword);
        cy.clickButton();
        signin.ErrorMessage()
        .should('be.visible')
        .should('contain', data.error1)
        .should('have.css', 'color', data.color1)
        .should('have.css', 'background-color', data.background1);;
        signin.ErrorIcon()
        .should('be.visible')
        .should('have.css', 'color', data.color2)
        .should('have.css', 'background-color', data.background1);;
    });
    it('Sign in with valid data', () => {
        signin.choiceElement(Element.Username)
        .type(data.correctUsername);
        signin.choiceElement(Element.Password)
        .type(data.correctPassword);
        cy.clickButton();
        signin.choiceElement(Element.UsernameOnPage)
        .should('contain',data.correctUsername);
    });

})
