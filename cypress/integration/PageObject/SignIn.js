class SigninPage {
    navigate () {
        cy.visit('http://localhost:3000/signin')
    }
    enterUsername(Evgen77) {
        cy.get('#username')
        .should('be.visible')
        .type('Evgen77')
        return this
    }
    enterPassword(psw) {
        cy.get('#password')
        .should('be.visible')
        .type('22041977')
        return this
    }
    submit () {
        cy.get('.MuiButton-label')
        .click()
        return this
    }
    enterWrongUsername(Evgen77Test) {
        cy.get('#username')
        .should('be.visible')
        .type('Evgen77Test')
        return this
    }
    enterWrongPassword(psw) {
        cy.get('#password')
        .should('be.visible')
        .type('22041977')
        return this
    }
    submit () {
        cy.get('.MuiButton-label')
        .click()
        return this
    }
    checkErrorMessage() {
        cy.get('.MuiAlert-message')
        .should('be.visible')
        .should('contain', 'Username or password is invalid')
        return this
    }
    checkSuccess() {
        cy.get('[data-test="sidenav-username"]')
        .should('contain', 'Evgen77')
        return this
    }
    usernameFieldCheck() {
        cy.get('#username')
        .should('be.visible')
        .should('contain', 'Username')
        return this
    }
    passwordFieldCheck() {
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('be.visible')
        .should('contain', 'Password')
        return this
    }
}
export default SigninPage