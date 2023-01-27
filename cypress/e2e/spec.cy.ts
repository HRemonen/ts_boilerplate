import { baseUrl } from '../support/e2e'

describe('template spec', () => {
  it('passes', () => {
    cy.visit(baseUrl)
    cy.contains('Kliksutin')
    cy.get('[data-cy=theButton]').click()
    cy.contains('kliksutin says: klik')
  })
})
