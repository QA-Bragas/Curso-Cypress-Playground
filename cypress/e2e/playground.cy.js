
describe('Cypress Playground', () => {
  beforeEach( () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('shows a promotional banner', () => {
    cy.get('#promotional-banner').should('be.visible')
  })

  it('click the Subscribe button and shows a success message', () =>{
    cy.contains('button', 'Subscribe').click()
    
  //  cy.get('#success').should('be.visible') checa pelo seletor CSS #success
    cy.contains(
      '#success',
      "You've been successfully subscribed to our newsletter."
    ).should('be.visible') //checa pelo conteúdo do seletor CSS #success, que no caso é um texto.
  })

  it('types in an input which "signs" a form, then asserts it as signed', () =>{
    cy.get('#signature-textarea').type('Bragas')

    cy.contains('#signature', 'Bragas').should('be.visible')
  })

  it('type in the signature field, checks the checkbox to see the preview, then uncheck it', () =>{
    cy.get('#signature-textarea-with-checkbox').type('Bragas')
    cy.get('#signature-checkbox').check()

    cy.contains('#signature-triggered-by-check','Bragas').should('be.visible')

    cy.get('#signature-checkbox').uncheck()

    cy.contains('#signature-triggered-by-check','Bragas').should('not.exist')

  })
})