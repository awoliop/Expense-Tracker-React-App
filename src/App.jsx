import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

const DUMMY__DATA = [
  {
    first_name: "Awelker",
    last_name: "Ibrahim",
  },
];
const App = () => {
  /*⬇➡️➡️➡️
  we are not including the App.js file in the components
  folder as it's function is uniqe(acting as a root js file
  where every other component is rendered on which in turn
  is rendered under the main.jsx file )
  */

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const [test, setTest] = useState({
    first_name: "",
    last_name: "",
  });

  const firstNameHandler = (event) => {
    setTest((prevState) => {
      return { ...prevState, first_name: event.target.value };
    });
  };

  const lastNameHandler = (event) => {
    setTest((prevState) => {
      return { ...prevState, last_name: event.target.value };
    });
  };

  const submitHandler1 = (event) => {
    event.preventDefault();

    const the_data = [...DUMMY__DATA, test];
    console.log(the_data);

    setTest({
      first_name: "",
      last_name: "",
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
      <div className="test">
        <form action="" onSubmit={submitHandler1}>
          <label htmlFor="">First-name</label>
          <input
            type="text"
            value={test.first_name}
            onChange={firstNameHandler}
          />
          <label htmlFor="">Last-name</label>
          <input
            type="text"
            value={test.last_name}
            onChange={lastNameHandler}
          />
          <button type="submit">Add values</button>
        </form>
      </div>
    </>
  );
};

export default App;
