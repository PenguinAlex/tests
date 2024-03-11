import { el } from 'redom';
//создание элементов на странице с redom

export function createPaymentForm() {
  const cardNumberInput = el('input.card-input.input-number', {
    type: 'text',
    placeholder: 'Номер карты',
    maxlength: '19',
  });
  const expirationDateInput = el('input.card-input.input-date', {
    type: 'text',
    placeholder: 'ММ/ГГ',
    maxlength: '5',
  });
  const cvvInput = el('input.card-input.input-code', {
    type: 'text',
    placeholder: 'CVV/CVC',
    maxlength: '3',
  });
  const emailInput = el('input.card-input.input-email', {
    type: 'email',
    placeholder: 'Email',
  });
  // eslint-disable-next-line
  const form = el('form', cardNumberInput, expirationDateInput, cvvInput, emailInput);

  return form;
}
// eslint-disable-next-line
export const container = el('.container',
  // eslint-disable-next-line
  el('.card', createPaymentForm(), el('.card-img#img')),
  el('button.btn', 'Оплатить')
);
