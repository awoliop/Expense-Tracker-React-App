import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// we pass the object that collects alll the data being passed as props !!
const ExpenseItem = (props) => {
  let printclicked1;
  // const classes = "card " + props.className;
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button
          onClick={function () {
            console.log("clicked!");
          }}
        >
          Change-Title
        </button>

        {/* All kinds of functions are possible!! */}
        {/* <button
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Change-Title
        </button>
        <button
          onClick={function printclicked() {
            console.log("clicked!");
          }}
        ></button>
        <button
          onClick={
            (printclicked1 = () => {
              console.log("clicked!");
            })
          }
        >
          Change-Title
        </button> */}
      </Card>
    </>
  );
};

export default ExpenseItem;
