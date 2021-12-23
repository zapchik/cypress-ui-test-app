/// <reference types="cypress" />

describe('Sign up and Sign in form tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signup')
      });
    it('Checking logos and titles of the registration (Sign up) page', () => {
        cy.get('[d="M40.073 1.133C39.27.776 38.36.623 37.39.66l-9.832.384c-.901.112-1.527.94-1.385 1.831.14.874.966 1.477 1.845 1.346l9.514-.357c.555-.02.957.068 1.237.192.42.186.603.409.717.777.116.37.12.936-.174 1.662l-3.843 9.51c-.782 1.937-3.782 4.168-6 4.251l-8.053.301c-.901.112-1.527.94-1.385 1.832.14.874.966 1.477 1.845 1.346l7.735-.274c3.881-.145 7.486-2.851 8.857-6.244l3.842-9.51c.514-1.273.635-2.6.258-3.806-.374-1.203-1.293-2.234-2.496-2.768zM21.68 2.33a1.66 1.66 0 00-.93-.147l-7.688.173c-3.859.094-7.416 2.67-8.74 5.945L.615 17.478c-.662 1.638-.61 3.417.344 4.798.951 1.383 2.715 2.145 4.644 2.099l9.772-.253c.894-.098 1.507-.894 1.355-1.76-.15-.849-.979-1.443-1.852-1.327l-9.456.23c-1.103.026-1.556-.293-1.806-.655-.25-.362-.38-.987-.002-1.92l3.708-9.178c.754-1.866 3.714-3.993 5.921-4.046l8.005-.195c.894-.098 1.507-.894 1.355-1.76a1.63 1.63 0 00-.921-1.181h-.002zm2.52 2.093c-.811-.315-1.718.071-2.027.862l-.186.462c-1.183.164-2.3.756-3.06 1.753-1.54 2.018-1.095 4.956.985 6.505.714.531.858 1.476.33 2.167-.53.692-1.488.815-2.202.285l-.635-.47c-.691-.527-1.675-.412-2.202.255-.537.682-.416 1.642.328 2.197l.635.47v.001c.13.096.264.186.402.269-.26.76.117 1.609.888 1.933.82.344 1.755-.037 2.07-.844l.185-.457c1.184-.163 2.3-.76 3.062-1.758 1.54-2.017 1.094-4.955-.986-6.504-.714-.531-.858-1.475-.33-2.167.53-.691 1.489-.816 2.203-.286l.634.47c.692.527 1.677.412 2.204-.255.537-.681.388-1.675-.33-2.197l-.632-.47c-.13-.097-.27-.175-.408-.257.275-.78-.127-1.652-.927-1.964z"]')
        .should('exist')
        .should('be.visible');
        cy.get('[d="M54.666 22l1.271-7.287h3.254L61.543 22h4.265v-.219l-2.803-8.08C65.731 12.635 67.19 10.734 67.38 8c.137-1.85-.39-3.295-1.579-4.334-1.19-1.039-2.887-1.559-5.092-1.559l-6.59-.013L50.659 22h4.007zm4.826-10.582l-2.98-.027 1.038-5.975 3.418.014c.894.036 1.545.305 1.955.806.41.502.552 1.194.424 2.078-.137.948-.549 1.698-1.237 2.25-.688.55-1.561.836-2.618.854zM74.68 22.273a7.869 7.869 0 003.377-.676c1.048-.47 1.85-1.124 2.406-1.962L78.7 17.447c-1.057 1.121-2.288 1.664-3.692 1.627-.865-.018-1.55-.314-2.05-.888-.502-.575-.734-1.34-.698-2.297h9.065l.219-1.682c.237-2.087-.135-3.812-1.115-5.175-.98-1.362-2.422-2.062-4.327-2.098-1.34-.037-2.561.27-3.664.922-1.103.652-2.005 1.58-2.707 2.783a9.563 9.563 0 00-1.258 3.965l-.04.546c-.11 1.313.081 2.514.573 3.603a5.76 5.76 0 002.236 2.57c.998.625 2.144.941 3.438.95zm3.158-9.064h-5.304c.437-1.148.932-1.955 1.483-2.42a2.74 2.74 0 011.894-.67c.547.01.998.162 1.353.458.356.296.579.709.67 1.237.046.329.041.675-.013 1.04l-.083.355zm9.037 9.064c1.403.037 2.661-.5 3.773-1.613-.018.52.032.966.15 1.34h3.788l.013-.26c-.173-.446-.25-.993-.232-1.64l.068-.875 1.135-7.082c.155-1.513-.242-2.75-1.19-3.712-.947-.962-2.26-1.46-3.937-1.497-1.814-.019-3.338.412-4.573 1.292-1.235.88-1.885 2.025-1.948 3.438l3.869-.014c.118-.592.387-1.046.806-1.36.42-.314.93-.463 1.532-.444.455.009.822.134 1.1.376.278.241.44.576.486 1.005.027.273.013.56-.041.86l-.192.89-1.805-.028c-2.169 0-3.898.43-5.188 1.292-1.29.862-1.967 2.099-2.03 3.712-.055 1.212.344 2.23 1.196 3.056.852.825 1.925 1.246 3.22 1.264zm1.177-2.993h-.22c-.483-.01-.864-.158-1.142-.445-.278-.287-.38-.677-.308-1.169.055-.437.196-.807.424-1.107.63-.83 1.655-1.263 3.076-1.3l1.34.014-.478 2.557c-.83 1.003-1.8 1.486-2.912 1.45h.22zM100.778 22l3.637-21h-3.87l-3.65 21h3.883zm17.197 0l5.21-13.262L124.236 22h4.033l7.397-19.906h-4.088l-4.799 14.123-.943-14.123h-3.405l-5.359 14.054-.396-14.054h-3.91L113.941 22h4.033zm22.38.273c2.097.037 3.858-.672 5.285-2.126 1.426-1.453 2.244-3.356 2.454-5.708.127-1.394-.03-2.663-.472-3.807-.442-1.144-1.135-2.042-2.078-2.694-.943-.651-2.067-.986-3.37-1.004-2.06-.055-3.801.638-5.223 2.078-1.422 1.44-2.251 3.381-2.488 5.824-.128 1.376.032 2.634.478 3.773.447 1.14 1.14 2.03 2.078 2.673.94.643 2.051.973 3.336.991zm.398-3.171h-.206c-.711-.019-1.263-.28-1.654-.787-.392-.505-.597-1.196-.616-2.07-.054-1.888.262-3.39.95-4.506.689-1.116 1.607-1.656 2.755-1.62.72.018 1.274.29 1.661.814.388.524.6 1.223.636 2.098.046 1.832-.269 3.311-.943 4.437-.675 1.125-1.604 1.67-2.79 1.634h.207zM152.823 22l1.71-9.68c.801-1.066 1.89-1.581 3.267-1.545.337 0 .77.046 1.299.137l.492-3.814c-.51-.128-.957-.192-1.34-.192-1.367 0-2.516.698-3.445 2.092l.355-1.805-3.623.014L148.968 22h3.855zm10.034 0l3.637-21h-3.869l-3.65 21h3.882zm8.312.287c1.468.037 2.753-.588 3.856-1.873l-.22 1.586h3.446l3.637-21h-3.87l-1.449 7.574c-.847-1.066-1.96-1.618-3.335-1.654-1.112-.027-2.122.237-3.029.793s-1.672 1.408-2.297 2.557c-.624 1.148-1.046 2.479-1.264 3.992l-.082.615a11.206 11.206 0 00-.041 1.668c.036 1.094.243 2.085.622 2.974.378.888.913 1.57 1.606 2.044.693.473 1.5.715 2.42.724zm1.337-3.21l-.202-.003c-1.203-.027-1.85-.843-1.942-2.447-.027-.474-.004-1.057.069-1.75.228-1.686.654-2.905 1.278-3.657.624-.752 1.406-1.115 2.345-1.087 1.066.045 1.777.556 2.133 1.531l-1.053 5.879c-.802 1.066-1.746 1.577-2.83 1.531l.202.002zM190.718 22l2.05-4.102h6.946l.629 4.102h4.088l-3.787-19.906h-3.705L186.302 22h4.416zm8.49-7.424h-4.799l3.678-7.41 1.121 7.41zm8.954 13.111l1.354-7c.83 1.03 1.96 1.564 3.39 1.6a5.352 5.352 0 003.063-.834c.92-.583 1.69-1.476 2.31-2.68.62-1.203 1.026-2.579 1.217-4.128.073-.766.1-1.431.082-1.997-.054-1.74-.483-3.119-1.285-4.135-.802-1.017-1.927-1.543-3.377-1.58-1.449-.036-2.707.547-3.773 1.75l.26-1.49-3.555.014-3.541 20.48h3.855zm4.109-8.6h-.212c-1.112-.036-1.837-.514-2.174-1.435l1.108-6.097c.729-.985 1.654-1.459 2.775-1.422.656.018 1.155.287 1.497.806.342.52.504 1.222.485 2.106l-.082 1.312c-.237 1.687-.665 2.903-1.285 3.65-.62.748-1.394 1.108-2.324 1.08h.212zm11.08 8.6l1.353-7c.83 1.03 1.96 1.564 3.391 1.6a5.352 5.352 0 003.063-.834c.92-.583 1.69-1.476 2.31-2.68.62-1.203 1.026-2.579 1.217-4.128.073-.766.1-1.431.082-1.997-.055-1.74-.483-3.119-1.285-4.135-.802-1.017-1.928-1.543-3.377-1.58-1.45-.036-2.707.547-3.774 1.75l.26-1.49-3.554.014-3.541 20.48h3.855zm4.108-8.6h-.212c-1.112-.036-1.836-.514-2.173-1.435l1.107-6.097c.73-.985 1.654-1.459 2.775-1.422.657.018 1.156.287 1.498.806.341.52.503 1.222.485 2.106l-.082 1.312c-.237 1.687-.666 2.903-1.285 3.65-.62.748-1.395 1.108-2.325 1.08h.212z"]')
        .should('exist')
        .should('be.visible');
        cy.get('.MuiTypography-h5')
        .should('contain','Sign Up')
        .should('be.visible');
        cy.get('#root > div > main > div.MuiBox-root.MuiBox-root-10 > div > p')
        .should('contain','Built by')
        .should('be.visible');
    });
    it('Checking the presence of the required fields on the registration page', () => {
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'First Name')
        .should('contain', '*');
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Last Name')
        .should('contain', '*');
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Username')
        .should('contain', '*');
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Password')
        .should('contain', '*');
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Confirm Password')
        .should('contain', '*');
    });
    it('Checking the [SIGN UP] on the registration page', () => {
        cy.get('#root > div > main > div.makeStyles-paper-2 > form > button')
        .should('exist')
        .should('be.visible')
        .should('contain','Sign Up');
    });
    it('Checking the presence of the required links on the registration page', () => {
        cy.get('.MuiGrid-root > a')
        .should('exist')
        .should('be.visible')
        .should('contain','Have an account? Sign In');
        cy.get('image')
        .should('exist')
        .should('be.visible');
        cy.get('#root > div > main > div.MuiBox-root.MuiBox-root-10 > div > p > a')
        .should('exist')
        .should('be.visible');
    });
    it('Checking the work of links', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('.MuiTypography-h5')
        .should('contain', 'Sign in');
    });
    it('Checking a `First Name` field  error message', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#firstName-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'First Name is required');
    });
    it('Checking a `Last Name` field  error message', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#lastName-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Last Name is required');
    });
    it('Checking a `Username` field  error message', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#username-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Username is required');
    });
    it('Checking a `Password` field  error message', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#password-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Enter your password');
    });
    it('Checking a `Confirm password` field  error message', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#firstName')
        .type('{selectall}');
        cy.get('#confirmPassword-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Confirm your password');
    });
    it('Checking the number of characters (at least 4) of the `Password` field ', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('220');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#password-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Password must contain at least 4 characters');
    });
    it('Checking the data entered in fields `Password` and `Confirm password`', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('11111111');
        cy.get('#confirmPassword-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Password does not match');
    });
    it('User registration check', () => {
        cy.get('#firstName')
        .should('exist')
        .should('be.visible')
        .type('Evgen');
        cy.get('#lastName')
        .should('exist')
        .should('be.visible')
        .type('Toporovsky');
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#confirmPassword')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('.MuiButton-label')
        .click();
        cy.get('.MuiTypography-h5')
        .should('contain', 'Sign in');
    });
    it('Checking logos and titles of the log in (Sign in) page', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('[d="M40.073 1.133C39.27.776 38.36.623 37.39.66l-9.832.384c-.901.112-1.527.94-1.385 1.831.14.874.966 1.477 1.845 1.346l9.514-.357c.555-.02.957.068 1.237.192.42.186.603.409.717.777.116.37.12.936-.174 1.662l-3.843 9.51c-.782 1.937-3.782 4.168-6 4.251l-8.053.301c-.901.112-1.527.94-1.385 1.832.14.874.966 1.477 1.845 1.346l7.735-.274c3.881-.145 7.486-2.851 8.857-6.244l3.842-9.51c.514-1.273.635-2.6.258-3.806-.374-1.203-1.293-2.234-2.496-2.768zM21.68 2.33a1.66 1.66 0 00-.93-.147l-7.688.173c-3.859.094-7.416 2.67-8.74 5.945L.615 17.478c-.662 1.638-.61 3.417.344 4.798.951 1.383 2.715 2.145 4.644 2.099l9.772-.253c.894-.098 1.507-.894 1.355-1.76-.15-.849-.979-1.443-1.852-1.327l-9.456.23c-1.103.026-1.556-.293-1.806-.655-.25-.362-.38-.987-.002-1.92l3.708-9.178c.754-1.866 3.714-3.993 5.921-4.046l8.005-.195c.894-.098 1.507-.894 1.355-1.76a1.63 1.63 0 00-.921-1.181h-.002zm2.52 2.093c-.811-.315-1.718.071-2.027.862l-.186.462c-1.183.164-2.3.756-3.06 1.753-1.54 2.018-1.095 4.956.985 6.505.714.531.858 1.476.33 2.167-.53.692-1.488.815-2.202.285l-.635-.47c-.691-.527-1.675-.412-2.202.255-.537.682-.416 1.642.328 2.197l.635.47v.001c.13.096.264.186.402.269-.26.76.117 1.609.888 1.933.82.344 1.755-.037 2.07-.844l.185-.457c1.184-.163 2.3-.76 3.062-1.758 1.54-2.017 1.094-4.955-.986-6.504-.714-.531-.858-1.475-.33-2.167.53-.691 1.489-.816 2.203-.286l.634.47c.692.527 1.677.412 2.204-.255.537-.681.388-1.675-.33-2.197l-.632-.47c-.13-.097-.27-.175-.408-.257.275-.78-.127-1.652-.927-1.964z"]')
        .should('exist')
        .should('be.visible');
        cy.get('[d="M54.666 22l1.271-7.287h3.254L61.543 22h4.265v-.219l-2.803-8.08C65.731 12.635 67.19 10.734 67.38 8c.137-1.85-.39-3.295-1.579-4.334-1.19-1.039-2.887-1.559-5.092-1.559l-6.59-.013L50.659 22h4.007zm4.826-10.582l-2.98-.027 1.038-5.975 3.418.014c.894.036 1.545.305 1.955.806.41.502.552 1.194.424 2.078-.137.948-.549 1.698-1.237 2.25-.688.55-1.561.836-2.618.854zM74.68 22.273a7.869 7.869 0 003.377-.676c1.048-.47 1.85-1.124 2.406-1.962L78.7 17.447c-1.057 1.121-2.288 1.664-3.692 1.627-.865-.018-1.55-.314-2.05-.888-.502-.575-.734-1.34-.698-2.297h9.065l.219-1.682c.237-2.087-.135-3.812-1.115-5.175-.98-1.362-2.422-2.062-4.327-2.098-1.34-.037-2.561.27-3.664.922-1.103.652-2.005 1.58-2.707 2.783a9.563 9.563 0 00-1.258 3.965l-.04.546c-.11 1.313.081 2.514.573 3.603a5.76 5.76 0 002.236 2.57c.998.625 2.144.941 3.438.95zm3.158-9.064h-5.304c.437-1.148.932-1.955 1.483-2.42a2.74 2.74 0 011.894-.67c.547.01.998.162 1.353.458.356.296.579.709.67 1.237.046.329.041.675-.013 1.04l-.083.355zm9.037 9.064c1.403.037 2.661-.5 3.773-1.613-.018.52.032.966.15 1.34h3.788l.013-.26c-.173-.446-.25-.993-.232-1.64l.068-.875 1.135-7.082c.155-1.513-.242-2.75-1.19-3.712-.947-.962-2.26-1.46-3.937-1.497-1.814-.019-3.338.412-4.573 1.292-1.235.88-1.885 2.025-1.948 3.438l3.869-.014c.118-.592.387-1.046.806-1.36.42-.314.93-.463 1.532-.444.455.009.822.134 1.1.376.278.241.44.576.486 1.005.027.273.013.56-.041.86l-.192.89-1.805-.028c-2.169 0-3.898.43-5.188 1.292-1.29.862-1.967 2.099-2.03 3.712-.055 1.212.344 2.23 1.196 3.056.852.825 1.925 1.246 3.22 1.264zm1.177-2.993h-.22c-.483-.01-.864-.158-1.142-.445-.278-.287-.38-.677-.308-1.169.055-.437.196-.807.424-1.107.63-.83 1.655-1.263 3.076-1.3l1.34.014-.478 2.557c-.83 1.003-1.8 1.486-2.912 1.45h.22zM100.778 22l3.637-21h-3.87l-3.65 21h3.883zm17.197 0l5.21-13.262L124.236 22h4.033l7.397-19.906h-4.088l-4.799 14.123-.943-14.123h-3.405l-5.359 14.054-.396-14.054h-3.91L113.941 22h4.033zm22.38.273c2.097.037 3.858-.672 5.285-2.126 1.426-1.453 2.244-3.356 2.454-5.708.127-1.394-.03-2.663-.472-3.807-.442-1.144-1.135-2.042-2.078-2.694-.943-.651-2.067-.986-3.37-1.004-2.06-.055-3.801.638-5.223 2.078-1.422 1.44-2.251 3.381-2.488 5.824-.128 1.376.032 2.634.478 3.773.447 1.14 1.14 2.03 2.078 2.673.94.643 2.051.973 3.336.991zm.398-3.171h-.206c-.711-.019-1.263-.28-1.654-.787-.392-.505-.597-1.196-.616-2.07-.054-1.888.262-3.39.95-4.506.689-1.116 1.607-1.656 2.755-1.62.72.018 1.274.29 1.661.814.388.524.6 1.223.636 2.098.046 1.832-.269 3.311-.943 4.437-.675 1.125-1.604 1.67-2.79 1.634h.207zM152.823 22l1.71-9.68c.801-1.066 1.89-1.581 3.267-1.545.337 0 .77.046 1.299.137l.492-3.814c-.51-.128-.957-.192-1.34-.192-1.367 0-2.516.698-3.445 2.092l.355-1.805-3.623.014L148.968 22h3.855zm10.034 0l3.637-21h-3.869l-3.65 21h3.882zm8.312.287c1.468.037 2.753-.588 3.856-1.873l-.22 1.586h3.446l3.637-21h-3.87l-1.449 7.574c-.847-1.066-1.96-1.618-3.335-1.654-1.112-.027-2.122.237-3.029.793s-1.672 1.408-2.297 2.557c-.624 1.148-1.046 2.479-1.264 3.992l-.082.615a11.206 11.206 0 00-.041 1.668c.036 1.094.243 2.085.622 2.974.378.888.913 1.57 1.606 2.044.693.473 1.5.715 2.42.724zm1.337-3.21l-.202-.003c-1.203-.027-1.85-.843-1.942-2.447-.027-.474-.004-1.057.069-1.75.228-1.686.654-2.905 1.278-3.657.624-.752 1.406-1.115 2.345-1.087 1.066.045 1.777.556 2.133 1.531l-1.053 5.879c-.802 1.066-1.746 1.577-2.83 1.531l.202.002zM190.718 22l2.05-4.102h6.946l.629 4.102h4.088l-3.787-19.906h-3.705L186.302 22h4.416zm8.49-7.424h-4.799l3.678-7.41 1.121 7.41zm8.954 13.111l1.354-7c.83 1.03 1.96 1.564 3.39 1.6a5.352 5.352 0 003.063-.834c.92-.583 1.69-1.476 2.31-2.68.62-1.203 1.026-2.579 1.217-4.128.073-.766.1-1.431.082-1.997-.054-1.74-.483-3.119-1.285-4.135-.802-1.017-1.927-1.543-3.377-1.58-1.449-.036-2.707.547-3.773 1.75l.26-1.49-3.555.014-3.541 20.48h3.855zm4.109-8.6h-.212c-1.112-.036-1.837-.514-2.174-1.435l1.108-6.097c.729-.985 1.654-1.459 2.775-1.422.656.018 1.155.287 1.497.806.342.52.504 1.222.485 2.106l-.082 1.312c-.237 1.687-.665 2.903-1.285 3.65-.62.748-1.394 1.108-2.324 1.08h.212zm11.08 8.6l1.353-7c.83 1.03 1.96 1.564 3.391 1.6a5.352 5.352 0 003.063-.834c.92-.583 1.69-1.476 2.31-2.68.62-1.203 1.026-2.579 1.217-4.128.073-.766.1-1.431.082-1.997-.055-1.74-.483-3.119-1.285-4.135-.802-1.017-1.928-1.543-3.377-1.58-1.45-.036-2.707.547-3.774 1.75l.26-1.49-3.554.014-3.541 20.48h3.855zm4.108-8.6h-.212c-1.112-.036-1.836-.514-2.173-1.435l1.107-6.097c.73-.985 1.654-1.459 2.775-1.422.657.018 1.156.287 1.498.806.341.52.503 1.222.485 2.106l-.082 1.312c-.237 1.687-.666 2.903-1.285 3.65-.62.748-1.395 1.108-2.325 1.08h.212z"]')
        .should('exist')
        .should('be.visible');
        cy.get('.MuiTypography-h5')
        .should('contain','Sign in')
        .should('be.visible');
        cy.get('span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1')
        .should('contain','Remember me')
        .should('be.visible');
        cy.get('p.MuiTypography-root.MuiTypography-body2.MuiTypography-colorTextSecondary.MuiTypography-alignCenter')
        .should('contain','Built by')
        .should('be.visible');
    });
    it('Checking the presence of the required fields and checkboxes on the `Sign in` page', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Username');
        cy.get('fieldset.PrivateNotchedOutline-root-6.MuiOutlinedInput-notchedOutline')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Password');
        cy.get('[d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"]')
        .should('exist')
        .should('be.visible');
    });
    it('Checking the [SIGN IN] on the `Sign in` page', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('span.MuiButton-label')
        .should('exist')
        .should('be.visible')
        .should('contain','Sign In');
    });
    it('Checking the presence of the required links on the `Sign in` page', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('div.MuiGrid-root.MuiGrid-item')
        .should('exist')
        .should('be.visible')
        .should('contain', `Don't have an account? Sign Up`);
        cy.get('image')
        .should('exist')
        .should('be.visible');
        cy.get('#root > div > main > div.MuiBox-root.MuiBox-root-20 > div > p > a')
        .should('exist')
        .should('be.visible');
    }); 
    it('Checkbox check ', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('input.PrivateSwitchBase-input-19')
        .check();
    });
    it('Checking the work of links on the `Sign in` page', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('#root > div > main > div.makeStyles-paper-11 > form > div.MuiGrid-root.MuiGrid-container > div:nth-child(2) > a')
        .click();
        cy.get('h1.MuiTypography-root.MuiTypography-h5')
        .should('contain','Sign Up');
    });
    it('Checking a `Username` field  error message', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('{selectall}');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('#username-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Username is required');
    });
    it('Checking a `Password` field  error message', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('220');
        cy.get('#username')
        .type('{selectall}');
        cy.get('#password-helper-text')
        .should('exist')
        .should('be.visible')
        .should('contain', 'Password must contain at least 4 characters');
    });
    it('User login check ', () => {
        cy.get('.MuiGrid-root > a')
        .click();
        cy.get('#username')
        .should('exist')
        .should('be.visible')
        .type('Evgen77');
        cy.get('#password')
        .should('exist')
        .should('be.visible')
        .type('22041977');
        cy.get('.MuiButton-label')
        .click();
        cy.get('[data-test="sidenav-username"]')
        .should('contain', 'Evgen77');
    });
});