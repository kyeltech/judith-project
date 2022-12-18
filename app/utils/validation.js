/* eslint-disable dot-notation */
// const EMAIL_REGEX = /([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/;
const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const PHONE_REGEX = /^.\d{9,16}$/;
const NAME_REGEX = /^.{3,50}$/;

/*
 * @params {string} : value : passwordValue
 */
function checkPasswordValidation(value) {
  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(value)) {
    return 'Password must not contain Whitespaces.';
  }

  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(value)) {
    return 'Password must have at least one Uppercase Character.';
  }

  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(value)) {
    return 'Password must have at least one Lowercase Character.';
  }

  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(value)) {
    return 'Password must contain at least one Digit.';
  }

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
  if (!isContainsSymbol.test(value)) {
    return 'Password must contain at least one Special Symbol.';
  }

  const isValidLength = /^.{10,16}$/;
  if (!isValidLength.test(value)) {
    return 'Password must be 10-16 Characters Long.';
  }
  return null;
}

/*
 * @params {string} : value : passwordValue
 */
let defaultRule = {
  uppercase: true,
  lowercase: true,
  number: true,
  space: true,
  special: true,
  min: 8,
  max: 50,
};
function validatePasswordWithRules(value, rules = defaultRule) {
  //keys: length, uppercase, lowercase, number, special, space
  let errors = [];

  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(value) && rules.space) {
    errors.push('space');
  }

  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(value) && rules.uppercase) {
    errors.push('uppercase');
  }

  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(value) && rules.lowercase) {
    errors.push('lowercase');
  }

  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(value) && rules.number) {
    errors.push('number');
  }

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
  if (!isContainsSymbol.test(value) && rules.special) {
    errors.push('special');
  }

  const isValidLength = new RegExp(`^.{${rules['min']},${rules['max']}}$`, 'g');
  if (!isValidLength.test(value)) {
    errors.push('length');
  }
  // console.log({ value, rules, errors });
  return errors;
}

function isStrongPassword(value) {
  let regex =
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
  return regex.test(value);
}

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function formatNumberWhileTyping(value) {
  if (isNullOrUndefined(value) || value === '') {
    return '';
  }
  return parseInt(value.replace(/,/g, '')).toLocaleString();
}

function numToMoneyString(num = '', currency = true, symbol = '\u20A6') {
  const result = (+num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  if (currency) {
    return symbol + result;
  }
  return result;
}

function roundDownSignificantDigits(number, decimals) {
  if (number) {
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (decimals || -1) + '})?');
    return number?.toString().match(re)[0];
  }
  return number;
}

function removeMoneyFormat(value) {
  let newText = value?.replace(/\s/g, '').replace(/,/g, '');
  if (isNaN(Number(value[0]))) {
    newText = newText.substring(1, newText.length);
  }
  return newText;
}

const formatMoney = (amount = '') => {
  amount = amount.toString();
  if (amount.length === 0) {
    return amount;
  }
  const currency = '\u20A6';
  let newString = amount;
  if (isNaN(Number(amount[0])) || amount[0] === '0') {
    newString = newString.substring(1, newString.length);
    if (newString === '') {
      return newString;
    }
  }
  const dotPosition = amount.indexOf('.');
  if (dotPosition !== -1) {
    if (amount.length - dotPosition > 3) {
      newString = Number(amount).toFixed(2);
    }
  }
  if (amount.length < 4) {
    return currency + newString;
  }
  let mainText = newString;
  if (dotPosition !== -1) {
    mainText = newString.substring(0, dotPosition);
  }
  let processedStr = '';
  let count = 0;
  for (let i = mainText.length - 1; i >= 0; i--) {
    processedStr = mainText[i] + processedStr;
    count += 1;
    if (count === 3 && i > 0) {
      processedStr = ',' + processedStr;
      count = 0;
    }
  }
  if (dotPosition !== -1) {
    const decimals = newString.substring(dotPosition, amount.length);
    return currency + processedStr + decimals;
  }
  return currency + processedStr;
};

const formatNumber = n => {
  if (n === null || n === undefined) {
    return '';
  }

  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const amountFormatter = (input_val, noDecimals = false) => {
  if (input_val === undefined) {
    return;
  }
  const decimal_pos = input_val.indexOf('.');
  if (decimal_pos >= 0 && !noDecimals) {
    let left_side = input_val.substring(0, decimal_pos);
    let right_side = input_val.substring(decimal_pos);
    left_side = formatNumber(left_side);
    right_side = formatNumber(right_side);
    right_side = right_side.substring(0, 2);
    input_val = left_side + '.' + right_side;
  } else {
    input_val = noDecimals
      ? formatNumber(input_val.replace(/\./g, ''))
      : formatNumber(input_val);
  }
  return input_val;
};
const amountBlur = (text, onChangeText, noDecimals = false) => {
  let input_val = text;
  if (input_val === '' || input_val === undefined) {
    return;
  }
  const decimal_pos = input_val.indexOf('.');
  const left_side = input_val.substring(0, decimal_pos);
  let right_side = input_val.substring(decimal_pos);
  if (noDecimals) {
    return;
  }
  if (decimal_pos >= 0) {
    right_side += '00';
    right_side = right_side.substring(0, 3);
    input_val = left_side + '.' + right_side;
  } else {
    input_val += '.00';
  }
  onChangeText?.(input_val);
};

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export {
  checkPasswordValidation,
  validatePasswordWithRules,
  isStrongPassword,
  isNullOrUndefined,
  formatNumberWhileTyping,
  removeMoneyFormat,
  numToMoneyString,
  formatMoney,
  amountFormatter,
  roundDownSignificantDigits,
  amountBlur,
  formatBytes,
  EMAIL_REGEX,
  PHONE_REGEX,
  NAME_REGEX,
};
