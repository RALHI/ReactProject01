import React, { useState } from 'react';
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from "./Component/Form/NewExpense";

const dummy_expenses = [
  { id: 'e1', title: 'Car Insurance', amount: 200, date: new Date(2019, 8, 8), },
  { id: 'e2', title: 'Bike Insurance', amount: 400, date: new Date(2019, 8, 9), },
  { id: 'e3', title: 'Trucks Insurance', amount: 600, date: new Date(2020, 8, 10), },
  { id: 'e4', title: 'Flight Insurance', amount: 800, date: new Date(2022, 8, 11), },
];


function App() {

  // useState() Hook is used to update the state 
  const [expenses, setExpenses] = useState(dummy_expenses);

  // will execute once the user will submit the new expense and add the new expense with the dummy_expenses array.
  const AddExpenseHandler = (expenseData) => {
    // update the state and adding the new expense with in the array including the previous data/state.
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
