import { pricingRules, PricingRule } from './pricingRules';

/**
 * @param items
 * @returns
 */

export function calculateTotal(items: string[]): number {
  const itemCounts: { [key: string]: number } = {};
  items.forEach((item) => {
    itemCounts[item] = (itemCounts[item] || 0) + 1;
  });

  let total = 0;

  for (const item in itemCounts) {
    const count = itemCounts[item];
    const rule: PricingRule | undefined = pricingRules[item];

    if (!rule) {
      throw new Error(`Unknown item: ${item}`);
    }

    if (rule.specialPrice) {
      const { quantity, price } = rule.specialPrice;
      const specialCount = Math.floor(count / quantity);
      const regularCount = count % quantity;
      total += specialCount * price + regularCount * rule.unitPrice;
    } else {
      total += count * rule.unitPrice;
    }
  }

  return total;
}
