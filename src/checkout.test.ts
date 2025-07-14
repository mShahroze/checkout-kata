import { calculateTotal } from './checkout';

test('calculates total for single items', () => {
  expect(calculateTotal(['A'])).toBe(50);
  expect(calculateTotal(['B'])).toBe(30);
  expect(calculateTotal(['C'])).toBe(20);
  expect(calculateTotal(['D'])).toBe(15);
});

test('applies special offers correctly', () => {
  expect(calculateTotal(['A', 'A', 'A'])).toBe(130);
  expect(calculateTotal(['B', 'B'])).toBe(45);
  expect(calculateTotal(['A', 'A', 'A', 'A'])).toBe(180);
  expect(calculateTotal(['B', 'B', 'B'])).toBe(75);
});

test('handles mixed items with special offers', () => {
  expect(calculateTotal(['A', 'B', 'A', 'B', 'A'])).toBe(175);
  expect(calculateTotal(['C', 'D'])).toBe(35);
});

test('throws error for unknown items', () => {
  expect(() => calculateTotal(['X'])).toThrow('Unknown item: X');
});
