import React from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" max="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
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
