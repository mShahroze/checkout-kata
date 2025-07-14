import { pricingRules, PricingRule } from './pricingRules';

/**
 * Given a list of items (like ['A', 'B', 'A']), calculates the total cost
 * by applying any relevant special pricing rules.
 * Returns the total in pence.
 * @param items
 * @returns
 */

export function calculateTotal(items: string[]): number {
  // Tally up how many of each item we have
  const itemCounts: { [key: string]: number } = {};
  items.forEach((item) => {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
  });

  let total = 0;

  // Loop through each item type and apply the pricing rules
  for (const item in itemCounts) {
    const count = itemCounts[item];
    const rule: PricingRule | undefined = pricingRules[item];

    // If there's no rule for this item, something's wrong
    if (!rule) {
      throw new Error(`Unknown item: ${item}`);
    }

    // If there's a special offer (like "3 for 130"), use it where we can
    if (rule.specialPrice) {
      const { quantity, price } = rule.specialPrice;
      const specialCount = Math.floor(count / quantity);
      const regularCount = count % quantity;
      total += specialCount * price + regularCount * rule.unitPrice;
    } else {
      // No deal for this item, just charge unit price
      total += count * rule.unitPrice;
    }
  }

  return total;
}
