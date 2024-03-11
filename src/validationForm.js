import { isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
export function validateCreditCardNumber(creditCardNumber) {
  if (
    getCreditCardNameByNumber(creditCardNumber) !== 'Credit card is invalid!'
  ) {
    return true;
  } else if (creditCardNumber.startsWith('2200')) {
    return true;
  } else {
    return false;
  }
}

export function validateCVV(cardNumber, CVVNumber) {
  return isSecurityCodeValid(cardNumber, CVVNumber) === true;
}
