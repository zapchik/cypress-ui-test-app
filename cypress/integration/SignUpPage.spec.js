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
        signup.checkLogo1Logo2Color();
        signup.checkHeader();
        signup.checkHaveAnAccountSigninLink();
        signup.checkBuiltByTitle();
        signup.checkCypressIoLink();
    });
});