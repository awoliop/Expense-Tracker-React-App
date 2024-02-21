import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  const saveExpenseHnadler=(expenseDataNew)=>{
    const expenseData= {
      id: Math.random().toString(),
      ...expenseDataNew,
    };
    console.log("In NewExpense")
    console.log(expenseData)
    props.onAddExpense(expenseData)

  }
  return (
    <>
      <ExpenseForm onSaveExpenseData={saveExpenseHnadler} />
    </>
  );
}

export default NewExpense;
