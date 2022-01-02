/// <reference types="cypress" />
//import { sign } from "crypto";
import ObjectPage from "./PageObject/ObjectPage";
describe('Signin page tests', () => {
    it('Check the page logos,titles,links', () => {
        const signin = new ObjectPage ();
        signin.navigateSignin();
        signin.checkLogo1();
        signin.checkLogo2();
        signin.checkSigninLogo();
        signin.checkRememberMeTitle();
        signin.checkDontHaveAnAccountLink();
        signin.checkBuiltByTitle();
    });
    it('Check the presence of the required fields', () => {
        const signin = new ObjectPage ();
        signin.navigateSignin();
        signin.allFieldsCheck();
    });
    it('check the color and message of the fields when entering invalid data', () => {
        const signin = new ObjectPage ();
        signin.navigateSignin();
        signin.enterShortPassword();
        signin.enterBlankUsername();
        signin.usernameFieldErrorColorCheck();
        signin.passwordFieldErrorColorCheck();
        signin.checkErrorMessageAndColor();
        signin.checkBorderColor();
    });
    it('Check error message', () => {
        const signin = new ObjectPage ();
        signin.navigateSignin();
        signin.enterWrongUsername();
        signin.enterWrongPassword();
        signin.submit();
        signin.checkErrorMessage();
    });
    it('Sign in with valid data', () => {
        const signin = new ObjectPage ();
        signin.navigateSignin();
        signin.enterUsername();
        signin.enterPassword();
        signin.submit();
        signin.checkSuccess();
    });

});
