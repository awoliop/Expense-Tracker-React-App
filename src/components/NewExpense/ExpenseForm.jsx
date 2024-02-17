import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  /*
  // using multiple usestaates(🔥🔥 OR YOU CAN USE ONE LIKE BELOW)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [entereDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  */

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="" onChange={AmountChangeHandler}>
            Amount
          </label>
          <input type="number" min="0.01" max="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="" onChange={dateChangeHandler}>
            Date
          </label>
          <input type="date" min="2019-01-01" max="2024-02-17" />
        </div>
        <div className="new-expense__actions">
          <button type="submit" className="new-expense__submit-button">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
