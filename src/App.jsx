import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
function App() {
  /*⬇➡️➡️➡️
  we are not including the App.js file in the components
  folder as it's function is uniqe(acting as a root js file
  where every other component is rendered on which in turn
  is rendered under the main.jsx file )
  */

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "new TV",
      amount: "799.49",
      date: new Date(2021, 2, 12),
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
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      <h1>Let's get started!!</h1>
      <Expenses item={expenses} />
    </>
  );

  // instead of using jsx code like the above we can use react built in methods like below , but is is a bit tedius and unreadable !!...so we stick with JSX!

  //  return (
  // React.createElement(
  // "div",
  // {},
  // React.createElement("h2", {}, "let's get started!!"),
  // React.createElement(Expenses, { item: expenses })
  // );

  //  )
}

export default App;
