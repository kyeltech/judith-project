import isAnagram from '../anagram';

test('is anagram function exist', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('cinema is an anagram of icemen', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('Hello is not an anagram of Alo', () => {
  expect(isAnagram('Hello', 'alo')).toBeFalsy();
});
