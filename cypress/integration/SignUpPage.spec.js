/// <reference types="cypress" />

import ObjectPage from "./PageObject/ObjectPage";
import TestData from "/home/zapchik/Work/cypress-ui-test-app/cypress/integration/PageObject/TestData";
describe('Signin page tests', () => {
    const signup = new ObjectPage ();
    const data = TestData;

    beforeEach(() => {
        signup.navigateSignup();
      });
    it('The `Sign Up` page should contain logos,titles,links', () => {
        signup.checkLogo1();
        signup.checkLogo2();
        signup.checkLogo1Logo2Color(data.color6);
        signup.checkHeader(data.header4,data.color3);
        signup.checkHaveAnAccountSigninLink(data.color4);
        signup.checkBuiltByTitle(data.color5,data.header3);
        signup.checkCypressIoLink();
    });
    it('The `Sign up` page should contain required fields and buttons', () => {
        signup.allFieldsCheckSignUp(data.placeholder1,data.placeholder2,data.placeholder3,data.placeholder4,data.placeholder5,data.placeholder6);
    });
    it('User should Signup with valid data', () => {
        signup.enterFirstName(data.correctFirstname);
        signup.enterLastName(data.correctLastname);
        signup.enterUsername(data.correctUsername);
        signup.enterPassword(data.correctPassword);
        signup.enterConfirmPassword(data.correctPassword);
        signup.submit();
        signup.checkHeader(data.header1,data.color3);
    });
});