import func from '../func';

// Each
// beforeEach(() => initDataBase());
// afterEach(() => closedDataBase());

//All
beforeAll(() => initDataBase());
afterAll(() => closedDataBase());

// run before each test using BeforeEach
const initDataBase = () => console.log('Initialized Database');
// after each test using AfterEach
const closedDataBase = () => console.log('Closed Database');

const nameCheck = () => console.log('Checking names...');

// using describe
describe('Checking names', () => {
  beforeEach(() => nameCheck);

  test('names', () => {
    const user = 'Jesse';
    expect(user).toBe('Jesse');
  });
});

test('should add 2 + 2 to equal 4', () => {
  expect(func.add(2, 2)).toBe(4);
});

// CHECK FOR TRUTHY & FALSY VALUES
// TOBENULL MATCHES ONLY NULL
// TOBEUNDEFINED MATCHES ONLY TOBEUNDEFINED
// TOBEDEFINED IS THE OPPOSITE OF TOBEUNDEFINED
// toBeTruthy matches anything that an if statement treats as true
// tobeFalsy matches anyrhing that an if statement treats as false

test('should ne null', () => {
  expect(func.null).toBeNull();
});

test('User should be kyel benjamin object', () => {
  expect(func.createuser()).toStrictEqual({
    first: 'kyel',
    last: 'benjamin',
  });
});
// to be lessthan or greaterthan
test('User weigh morethan 1600', () => {
  expect(func.weight(100, 200)).toBeGreaterThan(100);
});

// Regex
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('to be part of admin', () => {
  expect(func.admin()).toContain('john');
});

// // working with async data
// test('user fetched name should be ', async () => {
//   const data = await func.fetchUsers();
//   expect(data.name).toEqual('Leanne Graham');
//
