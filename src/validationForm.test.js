import { validateCreditCardNumber, validateCVV } from './validationForm';

describe('validateCreditCardNumber', () => {
  test('Валидация номера карты пропускает корректный номер карты', () => {
    const validNumber = '4242 4242 4242 4242';
    const isValid = validateCreditCardNumber(validNumber);
    expect(isValid).toBe(true);
  });

  test('Валидация номера карты не пропускает некорректный номер карты', () => {
    const invalidNumber = '1234 5678 9012 3456';
    const isValid = validateCreditCardNumber(invalidNumber);
    expect(isValid).toBe(false);
  });

  test('Валидация номера карты не пропускает произвольную строку, содержащую любые нецифровые символы.', () => {
    const nonNumericString = 'это не число';
    const isValid = validateCreditCardNumber(nonNumericString);
    expect(isValid).toBe(false);
  });

  test('Валидация номера карты не пропускает строку с недостаточным количеством цифр', () => {
    const shortNumber = '1234';
    const isValid = validateCreditCardNumber(shortNumber);
    expect(isValid).toBe(false);
  });

  test('Валидация номера карты не пропускает строку со слишком большим количеством цифр.', () => {
    const longNumber = '1234 5678 9012 3456 7890';
    const isValid = validateCreditCardNumber(longNumber);
    expect(isValid).toBe(false);
  });
});

describe('validateCVV', () => {
  it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '123')).toBe(true);
  });

  it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1')).toBe(false);
    expect(validateCVV(validNumber, '12')).toBe(false);
  });

  it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, '1234')).toBe(false);
    expect(validateCVV(validNumber, '12345')).toBe(false);
  });

  it('Валидация CVV/CVC не пропускает строки с тремя и более нецифровыми символами.', () => {
    const validNumber = '4242 4242 4242 4242';
    expect(validateCVV(validNumber, 'abc')).toBe(false);
    expect(validateCVV(validNumber, 'Кириллица')).toBe(false);
    expect(validateCVV(validNumber, '!@#')).toBe(false);
  });
});
