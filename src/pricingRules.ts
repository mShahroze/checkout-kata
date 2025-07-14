/**
 * Sets up the pricing rules for each item in the system.
 * Includes regular unit pricing and any special multi-buy offers (like "3 for 130").
 */

/**
 * Represents a special deal, e.g., "buy X items for Y total price".
 */

export interface SpecialPrice {
  quantity: number;
  price: number;
}

/**
 * Basic pricing details for an item.
 * Each item has a unit price, and optionally a special price if it qualifies for a deal.
 */

export interface PricingRule {
  unitPrice: number;
  specialPrice?: SpecialPrice;
}

/**
 * Actual pricing rules for the available items.
 * A and B have special offers, C and D are just standard prices.
 */

export const pricingRules: { [key: string]: PricingRule } = {
  A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};
