/* eslint-disable */
/// <reference types="cypress" />
describe('Игра в пары', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Игра должна иметь поле 4x4', () => {
    cy.get('.game')
      .should('have.length', 1);
    cy.get('.card')
      .should('have.length', 16)
  });

  it('В начальном состоянии числа должны быть невидимыми', () => {
    cy.get('.card')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0)')
  });

  it('При нажатии на карточку она должна остаться открытой', () => {
    cy.get('.card')
      .first()
      .click()
      .should('have.class', 'open');
  });

  it('Найденная пара карточек должна оставаться видимой', () => {
    let foundMatch = false;
    let firstCardIndex = 0;
    let secondCardIndex = 1;

    while (!foundMatch) {
      // Нажимаем на первую карточку
      cy.get('.card').eq(firstCardIndex).click().should('have.class', 'open');

      // Нажимаем на следующую карточку и проверяем, что это не первая карточка
      cy.get('.card').eq(secondCardIndex).click().should('have.class', 'open');
      expect(secondCardIndex).not.to.equal(firstCardIndex);

      // Если числа не совпадают, закрываем обе карточки и выбираем следующую пару
      if (cy.get('.card').eq(firstCardIndex).text !== cy.get('.card').eq(secondCardIndex).text) {
        cy.get('.card').eq(firstCardIndex).click().should('not.have.class', 'open');
        cy.get('.card').eq(secondCardIndex).click().should('not.have.class', 'open');
        firstCardIndex;
        secondCardIndex = firstCardIndex + 1;
      } else {
        // Если числа совпадают, проверяем, что они остались открытыми
        cy.get('.card').eq(firstCardIndex).should('have.class', 'open');
        cy.get('.card').eq(secondCardIndex).should('have.class', 'open');
        foundMatch = true;
      }
    }
  });
  it('Проверка скрытия непарных карточек', () => {
    let foundUnpaired = false;
    let currentIndex = 0;

    while (!foundUnpaired) {
      cy.get('.card').eq(currentIndex).click(); // Нажимаем на текущую карточку
      cy.get('.card').eq(currentIndex + 1).click(); // Нажимаем на следующую карточку

      // Получаем значения карточек
      const value1 = cy.get('.card').eq(currentIndex).text;
      const value2 = cy.get('.card').eq(currentIndex +1).text;

      // Проверяем, являются ли нажатые карточки непарой
      const isPair = value1 !== value2; // Пример проверки на непарность: значения должны быть разными
      if (!isPair) {
        foundUnpaired = true;
      } else {
        currentIndex += 2; // Если пара, переходим к следующей непарной карточке
      }
    }

    // Проверяем, что после нажатия на вторую карточку обе становятся невидимыми
    cy.get('.card').eq(currentIndex).should('not.have.class', 'open');
    cy.get('.card').eq(currentIndex + 1).should('not.have.class', 'open');
  });
});
