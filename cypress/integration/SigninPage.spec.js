/// <reference types="cypress" />
import SigninPage from "./PageObject/SignIn";
describe('Signin page tests', () => {
    /*it('Check the presence of the required fields', () => {
        const signin = new SigninPage ();
        signin.submit();
        signin.usernameFieldCheck();
        signin.passwordFieldCheck();
    });*/
    it('Check error message', () => {
        const signin = new SigninPage ();
        signin.navigate();
        signin.enterWrongUsername();
        signin.enterWrongPassword();
        signin.submit();
        signin.checkErrorMessage();
    });
    it('Sign in with valid data', () => {
        const signin = new SigninPage ();
        signin.navigate();
        signin.enterUsername();
        signin.enterPassword();
        signin.submit();
        signin.checkSuccess();
    });

});
