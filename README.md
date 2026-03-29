# Finance Tracker

A modern, responsive finance tracker built with React and Vite.

Track income and expenses, filter transactions, review financial totals at a glance, and manage entries with safe delete confirmation.

## Features

- Add income and expense transactions
- Automatic total income calculation
- Automatic total expenses calculation
- Automatic current balance calculation
- Filter transactions by type and category
- Delete transactions with confirmation dialog
- Empty-state feedback when filters return no results
- Responsive, colorful UI for desktop and mobile

## Tech Stack

- React 19
- Vite
- ESLint
- CSS (custom styling, responsive layout)

## Project Structure

```text
src/
	App.jsx
	App.css
	index.css
	components/
		Summary.jsx
		TransactionForm.jsx
		TransactionList.jsx
```

## Component Overview

- `App`: Manages application state, transaction CRUD flow, and filter state.
- `Summary`: Computes and displays income, expenses, and balance from transactions.
- `TransactionForm`: Controlled form for adding new transactions.
- `TransactionList`: Displays filtered transactions and delete actions.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Functional Notes

- Transaction amounts are normalized as numbers to ensure accurate calculations.
- Summary values are derived inside the `Summary` component from the current transaction list.
- Delete flow uses `window.confirm` to prevent accidental removals.

## Quality Checks

Current project status:

- `npm run lint` passes
- `npm run build` passes

## Future Enhancements

- Persist transactions (local storage or backend API)
- Edit existing transactions
- Add currency formatting and localization
- Add charts for spending trends

## License

This project is available for personal and educational use.
