/// <reference types="cypress" />

import ObjectPage from "./PageObject/ObjectPage";
import TestData from "/home/zapchik/Work/cypress-ui-test-app/cypress/integration/PageObject/TestData";
describe('Signin page tests', () => {
    const signin = new ObjectPage ();
    const data = TestData;

    beforeEach(function() {
        signin.navigateSignin();
        
      });
    it('The `Sign In` page should contain logos,titles,links', () => {
        signin.checkLogo1();
        signin.checkLogo2();
        signin.checkLogo1Logo2Color(data.color6);
        signin.checkHeader(data.header1,data.color3);
        signin.checkRememberMeTitle(data.header2,data.color3);
        signin.checkDontHaveAnAccountLink(data.color4,data.link1);
        signin.checkBuiltByTitle(data.color5,data.header3);
        signin.checkCypressIoLink();
    });
    it('The `Sign in` page should contain required fields, checkboxes and buttons', () => {
        signin.allFieldsCheck(data.placeholder1,data.placeholder2);
        signin.checkCheckbox();
    });
    it('check the color and message of the fields when entering invalid data', () => {
        signin.enterPassword(data.shortPassword);
        signin.enterUsername(data.blankUsername);
        signin.usernameFieldErrorColorCheck(data.placeholder1,data.color2);
        signin.passwordFieldErrorColorCheck(data.placeholder2,data.color2);
        signin.checkErrorMessageAndColor(data.error2,data.color2);
        signin.checkBorderColor(data.color2);
    });
    it('Check error message', () => {
        signin.enterUsername(data.wrongUsername);
        signin.enterPassword(data.wrongPassword);
        signin.submit();
        signin.checkErrorMessage(data.error1,data.color1,data.background1);
        signin.checkErrorIcon(data.color2,data.background1);
    });
    it('Sign in with valid data', () => {
        signin.enterUsername(data.correctUsername);
        signin.enterPassword(data.correctPassword);
        signin.submit();
        signin.checkSuccess(data.correctUsername);
    });

});
