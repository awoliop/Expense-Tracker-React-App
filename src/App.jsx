import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES= [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "new TV",
      amount: "799.49",
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "799.94",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e1",
      title: "New Desk (wooden)",
      amount: "450",
      date: new Date(2019, 5, 12),
    },
  ];
const App = () => {
  /*⬇➡️➡️➡️
  we are not including the App.js file in the components
  folder as it's function is uniqe(acting as a root js file
  where every other component is rendered on which in turn
  is rendered under the main.jsx file )
  */

  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense,...expenses]);
  };

  

  return (
    <>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}   />

    </>
  );

  
};

export default App;
