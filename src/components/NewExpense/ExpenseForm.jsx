import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
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
