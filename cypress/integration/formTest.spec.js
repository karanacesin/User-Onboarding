describe('Form Inputs', () => {

    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type('Dawna')
        .should('have.value', 'Dawna')
    })

    it('can type an email', () => {
        cy.get('input[name="email"]')
        .type('karanacesin@yahoo.com')
        .should('have.value', 'karanacesin@yahoo.com')
    })

    it('can type a password', () => {
        cy.get('input[name="password"]')
        .type('whitetiger')
        .should('have.value', 'whitetiger')
    })

    it('can check the terms', () => {
        cy.get('input[name="terms"]')
        .checked()
        .should('have.value', checked)
    })

    it('submit button not disabled any more', () => {
        cy.get('button.submit')
        .should('not.be.disabled')
      })


})

describe('Form Validation', () => {

    it('validate name', () => {
        cy.get('input[name="name"]')
        .type('a')
        cy.contains("Username is Required")
        .should('exist')
    })

    it('validate email', () => {
        cy.get('input[name="email"]')
        .type('a')
        cy.contains("Email is Required")
        .should('exist')
    })

    it('validate password', () => {
        cy.get('input[name="password"]')
        .type('a')
        cy.contains("Password is Required")
        .should('exist')
    })

    it('validate terms', () => {
        cy.get('input[name="terms"]')
        .checked()
        cy.contains("Terms of Service is Required")
        .should('exist')
    })


})