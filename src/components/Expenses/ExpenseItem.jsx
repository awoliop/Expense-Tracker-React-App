import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// we pass the object that collects alll the data being passed as props !!
function ExpenseItem(props) {
  // const classes = "card " + props.className;
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
}

export default ExpenseItem;
