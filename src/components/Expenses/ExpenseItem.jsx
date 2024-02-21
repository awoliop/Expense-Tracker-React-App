import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
// we pass the object that collects alll the data being passed as props !!
const ExpenseItem = (props) => {
  /*
  ➡️➡️➡️ Using useState to update values!
  ☑️ should be declared in a function 
  ☑️ and not in a nested function e.g: clickHandler function!!
  ☑️ usestates are seperated as per components and as out example, for every call another usestates of its own is created!! 
  
  */
  // console.log("being reEvaluated by React!");

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;

