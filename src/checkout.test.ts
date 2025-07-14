import { calculateTotal } from './checkout';

// Basic pricing: test that individual items return the correct unit prices
test('calculates total for single items', () => {
  expect(calculateTotal(['A'])).toBe(50);
  expect(calculateTotal(['B'])).toBe(30);
  expect(calculateTotal(['C'])).toBe(20);
  expect(calculateTotal(['D'])).toBe(15);
});

// Special offers: make sure discounts are applied correctly
test('applies special offers correctly', () => {
  expect(calculateTotal(['A', 'A', 'A'])).toBe(130);
  expect(calculateTotal(['B', 'B'])).toBe(45);
  // Also test a few edge combinations (offer + regular price)
  expect(calculateTotal(['A', 'A', 'A', 'A'])).toBe(180);
  expect(calculateTotal(['B', 'B', 'B'])).toBe(75);
});

// Mix of different items: combos of special offers and regular items
test('handles mixed items with special offers', () => {
  expect(calculateTotal(['A', 'B', 'A', 'B', 'A'])).toBe(175);
  expect(calculateTotal(['C', 'D'])).toBe(35);
});

// Invalid input: unknown item should throw an error
test('throws error for unknown items', () => {
  expect(() => calculateTotal(['X'])).toThrow('Unknown item: X');
});

// testing for Empty Basket
test('handles empty basket', () => {
  expect(calculateTotal([])).toBe(0);
});
