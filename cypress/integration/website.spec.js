it('should display homepage', () => {
    cy.visit('https://gorrion.io')
    cy.title().should('include', 'Gorrion Software House')
})