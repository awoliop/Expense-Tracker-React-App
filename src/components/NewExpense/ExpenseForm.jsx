import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {



// ➡️➡️➡️Simplest way to implement this although it has its won draw backs!!....could end up working with an outdated data!!
const [enteredTitle, setEnteredTitle]= useState("")
const [enteredAmount, setEnteredAmount]= useState("")
const [enteredDate, setEnteredDate]= useState("")



const titleChangeHandler=(event)=>{
  setEnteredTitle(event.target.value)
}

const amountChangeHandler=(event)=>{
  setEnteredAmount(event.target.value)
}

const dateChangeHandler=(event)=>{
  setEnteredDate(event.target.value)
}


const submitHandler=(event)=>{
  event.preventDefault();


  const expenseData={
    title: enteredTitle,
    amount: enteredAmount,
    date:new Date(enteredDate)
  }

  console.log(expenseData);

  setEnteredTitle("")
  setEnteredAmount("")
  setEnteredDate("")
}



// OR (with sinlge userstate rather than having multiple ones for every variable change@@)


/*
//➡️➡️➡️still doesn't resolve the issue mentioed above!! 
const [userInput, setUserInput]= useState({
  enteredTitle:"",
  enteredAmount: "",
  enteredDate: "",
})


const titleChangeHandler=(event)=>{
  setUserInput({
    ...userInput, 
    enteredTitle:event.target.value,
  })
}

const amountChangeHandler=(event)=>{
  setUserInput({
    ...userInput,
    enteredAmount:event.target.value
  })
}


const dateChangeHandler=(event)=>{
  setUserInput({
    ...userInput,
    enteredDate:event.target.value,
  })
}



const submitHandler=(event)=>{
  event.preventDefault();

  const expenseData={
    ...userInput,
    enteredDate: new Date(userInput.enteredDate)
  }
  console.log(expenseData)
}

*/



// OR ( this one will be able to work with the immediete previous data!!)

/*
const [userInput, setUserInput]= useState({
  enteredTitle:"",
  enteredAmount: "",
  enteredDate: "",
})

const titleChangeHandler=(event)=>{
  setUserInput((prevState)=>{
    return {...prevState, enteredTitle:event.target.value}
  })
}

const amountChangeHandler=(event)=>{

  setUserInput((prevState)=>{
    return {...prevState, enteredAmount: event.target.value}
  })
}

const dateChangeHandler=(event)=>{
  setUserInput((prevState)=>{
    return {...prevState, enteredDate:event.target.value}
  })
}


const submitHandler=(event)=>{
  event.preventDefault();
  const expenseData={
    ...userInput,
    enteredDate: new Date(userInput.enteredDate)
  }

  

  console.log(expenseData)
  // for when we want to clear the input fields we ned to implement what we call Two-way binding!!(where we can not just listen to the inputs but also make changes to it!!)
}
*/




  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          {/* the value attribute will fill up the field with the value of the enteredTitle, which is being set to empty upon submission , take a look into the function !! */}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="" >Amount</label>
          <input type="number"  min="0.01" max="1000000" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="" >Date</label>
          <input type="date" min="2019-01-01" max="2024-02-17"  value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit" className="new-expense__submit-button">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

