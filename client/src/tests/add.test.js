const add = (a, b) => a + b;
const generateGreeting = name => `Hello ${name}! `;

test('should add two numbers', () => {
  const result = add(1, 5);
  expect(result).toBe(6);
});

test('should return the correct name', () => {
  const result = generateGreeting('Tom');
  expect(result).toBe('Hello Tom');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous');
});
