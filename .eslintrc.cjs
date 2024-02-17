module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

// add a printwidth of 220 to the prettier config file
// Path: .prettierrc.cjs
// Compare this snippet from src/components/NewExpense/ExpenseForm.jsx:
// import React, { useState } from 'react';
// import './ExpenseForm.css';
// function ExpenseForm() {

//   const [enteredTitle, setEnteredTitle] = useState('');
