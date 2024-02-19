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
  const [title, setTitle] = useState(props.title);
  // console.log("being reEvaluated by React!");

  const clickHandler = () => {
    // vallue will be updated upon click to the following value!!
    setTitle("Updated!");
    // the reason we dont see the newly made change on the title variable is because the change is scheduled and not changed right away!!
  };

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change-Title</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
