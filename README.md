# Checkout Kata

A checkout system built with React and TypeScript for the CDL Software Engineer Assessment. This project implements a simple shopping basket that calculates the total price of items based on given pricing rules, including special offers (e.g., 3 A's for £1.30). It demonstrates key full-stack development concepts such as modular design, type safety, state management, and unit testing.

## Features

- **User Interface:** A simple React-based UI for adding items (A, B, C, D) to a basket and displaying the running total.
- **Pricing Logic:** Handles individual item prices and special offers (e.g., 3 A's for £1.30, 2 B's for £0.45).
- **Type Safety:** Uses TypeScript for robust type definitions of pricing rules and checkout logic.
- **Testing:** Includes Jest unit tests to verify pricing calculations and edge cases.
- **Modular Design:** Separates pricing rules, checkout logic, and UI components for maintainability.

## Pricing Rules

| Item | Unit Price (pence) | Special Price (pence) |
|------|--------------------|-----------------------|
| A    | 50                 | 3 for 130             |
| B    | 30                 | 2 for 45              |
| C    | 20                 | -                     |
| D    | 15                 | -                     |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mShahroze/checkout-kata.git
   cd checkout-kata
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- Enter an item SKU (A, B, C, or D) in the input field and click "Add Item."
- The basket displays the added items, and the running total updates automatically, applying special offers where applicable.
- Example: Adding three A's results in a total of £1.30 instead of £1.50 due to the special offer.

## Running Tests

Run unit tests to verify the checkout logic:
```bash
npm test
```
The tests cover individual item pricing, special offers, mixed items, and edge cases like unknown items.

## Project Structure

- `src/App.tsx`: Main React component with the UI for adding items and displaying the basket and total.
- `src/pricingRules.ts`: Defines pricing rules and special offers for items A, B, C, and D.
- `src/checkout.ts`: Contains the logic to calculate the total price based on items and pricing rules.
- `src/checkout.test.ts`: Jest unit tests for the checkout logic.

## Development Notes

- Built with **React** and **TypeScript** to ensure a modern, type-safe frontend.
- Kept boilerplate minimal, focusing on core functionality as per the assessment guidelines.
- Used meaningful commit messages to show development progress (see commit history).
- Error handling included for invalid items (e.g., throws an error for unknown SKUs).
- No external dependencies beyond Create React App and Jest for testing.

## Future Improvements

- Add styling (e.g., Tailwind CSS) for a more polished UI.
- Implement the optional Java SpringBoot backend for total calculations.
- Enhance the UI with features like removing items from the basket or resetting it.