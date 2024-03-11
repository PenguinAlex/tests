import { createPaymentForm } from './payForm';

describe('createPaymentForm', () => {
  let form;

  beforeEach(() => {
    form = createPaymentForm();
  });

  test('Функция создания DOM-дерева должна вернуть DOM-элемент', () => {
    expect(form).toBeDefined();
    expect(form instanceof Element).toBe(true);
  });

  test('Функция создания DOM-дерева должна вернуть DOM-элемент, в котором содержится строго четыре поля для ввода с плейсхолдерами «Номер карты», «ММ/ГГ», CVV/CVC, Email', () => {
    const inputFields = form.querySelectorAll('input');

    expect(inputFields.length).toBe(4);
    expect(inputFields[0].getAttribute('placeholder')).toBe('Номер карты');
    expect(inputFields[1].getAttribute('placeholder')).toBe('ММ/ГГ');
    expect(inputFields[2].getAttribute('placeholder')).toBe('CVV/CVC');
    expect(inputFields[3].getAttribute('placeholder')).toBe('Email');
  });
});
